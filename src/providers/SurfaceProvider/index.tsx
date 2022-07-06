import * as React from 'react'
import { ColorValue } from 'react-native'

import { SurfaceContext } from '../../contexts/surface'

interface SurfaceProviderProps {
  containerColor?: ColorValue
  contentColor?: ColorValue
  overlayColor?: ColorValue
  elevation: 0 | 1 | 2 | 3 | 4 | 5
  children: React.ReactNode
}

export function SurfaceProvider({
  children,
  elevation = 0,
  containerColor,
  contentColor,
  overlayColor
}: SurfaceProviderProps) {
  return (
    <SurfaceContext.Provider
      value={{
        containerColor,
        contentColor,
        overlayColor,
        elevation
      }}
    >
      {children}
    </SurfaceContext.Provider>
  )
}
