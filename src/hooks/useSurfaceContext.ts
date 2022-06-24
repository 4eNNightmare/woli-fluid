import React from 'react'

import { SurfaceContext } from '../contexts/surface'

export default function useSurfaceContext() {
  return React.useContext(SurfaceContext)
}
