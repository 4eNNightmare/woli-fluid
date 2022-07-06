import React from 'react'
import { View, ViewProps } from 'react-native'

import { useFluidContext } from '../../../hooks/useFluidContext'
import { useSurfaceContext } from '../../../hooks/useSurfaceContext'

export interface SurfaceProps extends Omit<ViewProps, 'children'> {}

export function Divider({ style, ...rest }: SurfaceProps) {
  const { contentColor } = useSurfaceContext()
  const { tokens } = useFluidContext()
  return (
    <View
      style={[
        {
          height: 1,
          backgroundColor: contentColor ?? tokens.colors.onBackground,
          opacity: 0.12
        },
        style
      ]}
      {...rest}
    />
  )
}
