import { View, ViewProps } from 'react-native'
import React from 'react'
import useSurfaceContext from '../../../hooks/useSurfaceContext'

export interface SurfaceProps extends Omit<ViewProps, 'children'> {}

export default function Divider({style, ...rest}: SurfaceProps) {
  const { contentColor } = useSurfaceContext()
  return (
    <View style={[{height: 1, backgroundColor: contentColor, opacity: 0.12}, style]} {...rest}/>
  )
}