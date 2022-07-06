import React from 'react'

import { SurfaceContext } from '../contexts/surface'

export function useSurfaceContext() {
  return React.useContext(SurfaceContext)
}
