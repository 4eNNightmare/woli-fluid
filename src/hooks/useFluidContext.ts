import React from 'react'

import { FluidContext } from '../contexts/fluid'

export function useFluidContext() {
  return React.useContext(FluidContext)
}
