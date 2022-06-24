import { deepmerge } from 'deepmerge-ts'
import * as React from 'react'

import { BUILD_DESIGN_TOKENS_DEFAULT_PARAMS } from '../../constants/design_tokens'
import { WoliFluidContext } from '../../contexts/woliFluid'
import buildDesignTokens, {
  BuildDesignTokensParams,
  DesignTokens
} from '../../utils/design_tokens'

interface WoliFluidProviderProps extends Partial<BuildDesignTokensParams> {
  tokensOverride?: Partial<DesignTokens>
  children: React.ReactNode
}

export default function WoliFluidProvider({
  borderRadius = BUILD_DESIGN_TOKENS_DEFAULT_PARAMS.borderRadius,
  children,
  errorKey,
  fontFamily = BUILD_DESIGN_TOKENS_DEFAULT_PARAMS.fontFamily,
  mode,
  primaryKey = BUILD_DESIGN_TOKENS_DEFAULT_PARAMS.primaryKey,
  secondaryKey = BUILD_DESIGN_TOKENS_DEFAULT_PARAMS.secondaryKey,
  tokensOverride = {}
}: WoliFluidProviderProps) {
  return (
    <WoliFluidContext.Provider
      value={{
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
    </WoliFluidContext.Provider>
  )
}
