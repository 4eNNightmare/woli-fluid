import { deepmerge } from 'deepmerge-ts'
import * as React from 'react'

import { BUILD_DESIGN_TOKENS_DEFAULT_PARAMS } from '../../constants/design_tokens'
import { FluidContext } from '../../contexts/fluid'
import {
  buildDesignTokens,
  BuildDesignTokensParams,
  DesignTokens
} from '../../utils/design_tokens'

interface FluidProviderProps extends Partial<BuildDesignTokensParams> {
  tokensOverride?: Partial<DesignTokens>
  children: React.ReactNode
}

export function FluidProvider({
  borderRadius = BUILD_DESIGN_TOKENS_DEFAULT_PARAMS.borderRadius,
  children,
  errorKey,
  fontFamily = BUILD_DESIGN_TOKENS_DEFAULT_PARAMS.fontFamily,
  mode,
  primaryKey = BUILD_DESIGN_TOKENS_DEFAULT_PARAMS.primaryKey,
  secondaryKey = BUILD_DESIGN_TOKENS_DEFAULT_PARAMS.secondaryKey,
  tokensOverride = {}
}: FluidProviderProps) {
  return (
    <FluidContext.Provider
      value={{
        mode,
        tokens: deepmerge(
          buildDesignTokens({
            borderRadius,
            errorKey,
            fontFamily,
            mode,
            primaryKey,
            secondaryKey
          }),
          tokensOverride
        ) as DesignTokens
      }}
    >
      {children}
    </FluidContext.Provider>
  )
}
