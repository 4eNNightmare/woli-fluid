import React from 'react'

import { BUILD_DESIGN_TOKENS_DEFAULT_PARAMS } from '../constants/design_tokens'
import buildDesignTokens, { DesignTokens } from '../utils/design_tokens'

export interface WoliFluidContextType {
  tokens: DesignTokens
}


const defaultValue: WoliFluidContextType = {
  tokens: buildDesignTokens(BUILD_DESIGN_TOKENS_DEFAULT_PARAMS)
}

export const WoliFluidContext = React.createContext(defaultValue)
