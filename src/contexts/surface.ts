import React from 'react'
import { ColorValue } from 'react-native'

export interface SurfaceContextType {
  containerColor?: ColorValue
  contentColor?: ColorValue
  overlayColor?: ColorValue
  elevation: 0 | 1 | 2 | 3 | 4 | 5
}

export const surfaceContextDefaultValue: SurfaceContextType = {
  containerColor: undefined,
  contentColor: undefined,
  overlayColor: undefined,
  elevation: 0
}

export const SurfaceContext = React.createContext(surfaceContextDefaultValue)
