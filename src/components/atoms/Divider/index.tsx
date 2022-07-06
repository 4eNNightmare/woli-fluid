import React from 'react'
import { View, ViewProps } from 'react-native'

import { useSurfaceContext } from '../../../hooks/useSurfaceContext'

export interface SurfaceProps extends Omit<ViewProps, 'children'> {}

export function Divider({ style, ...rest }: SurfaceProps) {
  const { contentColor } = useSurfaceContext()
  return (
    <View
      style={[
        { height: 1, backgroundColor: contentColor, opacity: 0.12 },
        style
      ]}
      {...rest}
    />
  )
}
