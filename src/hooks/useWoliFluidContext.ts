import React from 'react'

import { WoliFluidContext } from '../contexts/woliFluid'

export default function useWoliFluidContext() {
  return React.useContext(WoliFluidContext)
}
