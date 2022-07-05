import { AnyColor, colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import React, { useMemo } from 'react'
import { ColorValue, View, ViewProps } from 'react-native'

import useSurfaceContext from '../../../hooks/useSurfaceContext'
import useWoliFluidContext from '../../../hooks/useWoliFluidContext'
import SurfaceProvider from '../../../providers/SurfaceProvider'
import { generateOnColor } from '../../../utils/design_tokens/colors'

extend([mixPlugin])

export interface SurfaceProps extends ViewProps {
  containerColor?: ColorValue
  contentColor?: ColorValue
  overlayColor?: ColorValue
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
}

function Container({ children, style, ...rest }: ViewProps) {
  const { containerColor } = useSurfaceContext()

  return (
    <View style={[{ backgroundColor: containerColor }, style]} {...rest}>
      {children}
    </View>
  )
}

export default function Surface({
  children,
  elevation = 0,
  containerColor,
  contentColor,
  overlayColor,
  ...rest
}: SurfaceProps) {
  const { tokens } = useWoliFluidContext()
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
