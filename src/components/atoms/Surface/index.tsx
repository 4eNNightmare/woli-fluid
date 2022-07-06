import { AnyColor, colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import React, { useMemo } from 'react'
import { ColorValue, View, ViewProps } from 'react-native'

import { useFluidContext } from '../../../hooks/useFluidContext'
import { useSurfaceContext } from '../../../hooks/useSurfaceContext'
import { SurfaceProvider } from '../../../providers/SurfaceProvider'
import { generateOnColor } from '../../../utils/design_tokens/colors'
import { Shadow } from './shadow'

extend([mixPlugin])

export interface SurfaceProps extends ViewProps {
  containerColor?: ColorValue
  contentColor?: ColorValue
  overlayColor?: ColorValue
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
}

function Container({ children, style, ...rest }: ViewProps) {
  const { containerColor, elevation } = useSurfaceContext()
  const viewStyle = useMemo(
    () => [{ backgroundColor: containerColor }, style],
    [containerColor, style]
  )

  if (elevation === 0) {
    return (
      <View style={viewStyle} {...rest}>
        {children}
      </View>
    )
  }

  return (
    <Shadow elevation={elevation} viewStyle={viewStyle}>
      <View style={viewStyle} {...rest}>
        {children}
      </View>
    </Shadow>
  )
}

export function Surface({
  children,
  elevation = 0,
  containerColor,
  contentColor,
  overlayColor,
  ...rest
}: SurfaceProps) {
  const { tokens } = useFluidContext()
  const parentSurface = useSurfaceContext()

  const computedContainerColor = useMemo(() => {
    return (
      containerColor ??
      parentSurface?.containerColor ??
      tokens.colors.background
    )
  }, [containerColor, parentSurface?.containerColor, tokens.colors.background])

  const containerColorWithOverlay = useMemo(() => {
    return colord(computedContainerColor as AnyColor)
      .mix(
        (overlayColor ?? tokens.colors.primary) as AnyColor,
        [0, 0.05, 0.08, 0.11, 0.12, 0.14][elevation]
      )
      .toHex()
  }, [overlayColor, elevation, tokens.colors, computedContainerColor])

  const computedContentColor = useMemo(() => {
    return (
      contentColor ?? generateOnColor(tokens.colors, containerColorWithOverlay)
    )
  }, [contentColor, tokens.colors, containerColorWithOverlay])

  return (
    <SurfaceProvider
      containerColor={containerColorWithOverlay}
      overlayColor={overlayColor}
      contentColor={computedContentColor}
      elevation={elevation}
    >
      <Container {...rest}>{children}</Container>
    </SurfaceProvider>
  )
}
