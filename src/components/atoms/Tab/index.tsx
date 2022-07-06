import React from 'react'
import { Pressable } from 'react-native'

import { useFluidContext } from '../../../hooks/useFluidContext'
import { useSurfaceContext } from '../../../hooks/useSurfaceContext'
import { Surface, SurfaceProps } from '../Surface'
import { Typography, TypographyProps } from '../Typography'
import styles from './styles'

export interface TabProps extends SurfaceProps {
  title: string
  id: string
  labelProps?: TypographyProps
  selected?: boolean
  onPress: (key: string) => void
}

export function Tab({
  title,
  id,
  selected,
  style,
  onPress,
  labelProps,
  ...rest
}: TabProps) {
  const { tokens } = useFluidContext()
  const parentSurface = useSurfaceContext()

  return (
    <Pressable onPress={() => onPress(id)}>
      <Surface
        elevation={0}
        containerColor={
          selected
            ? tokens.colors.primaryContainer
            : parentSurface.containerColor
        }
        style={[
          styles.container,
          tokens.borderRadius.halfHeight(40).all,
          style
        ]}
        {...rest}
      >
        <Typography.Label.Medium value={title} {...labelProps} />
      </Surface>
    </Pressable>
  )
}
