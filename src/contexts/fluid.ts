import React from 'react'

import { BUILD_DESIGN_TOKENS_DEFAULT_PARAMS } from '../constants/design_tokens'
import { buildDesignTokens, DesignTokens } from '../utils/design_tokens'
import { BuildColorsParams } from '../utils/design_tokens/colors'

export interface FluidContextType {
  tokens: DesignTokens
  mode: BuildColorsParams['mode']
}

const defaultValue: FluidContextType = {
  tokens: buildDesignTokens(BUILD_DESIGN_TOKENS_DEFAULT_PARAMS),
  mode: 'light'
}

export const FluidContext = React.createContext(defaultValue)
