import {
  BorderRadiusTokens,
  buildBorderRadiusTokens,
  BuildBorderRadiusTokensParams
} from './border_radius'
import buildColors, { BuildColorsParams, ColorsTokens } from './colors'
import buildTypography, {
  BuildTypographyParams,
  TypographyTokens
} from './typograhy'

export interface DesignTokens {
  colors: ColorsTokens
  typography: TypographyTokens
  borderRadius: BorderRadiusTokens
}

export interface BuildDesignTokensParams
  extends BuildColorsParams,
    BuildTypographyParams,
    BuildBorderRadiusTokensParams {}

export default function buildDesignTokens(
  params: BuildDesignTokensParams
): DesignTokens {
  return {
    colors: buildColors({
      primaryKey: params.primaryKey,
      secondaryKey: params.secondaryKey,
      errorKey: params.errorKey,
      mode: params.mode
    }),
    typography: buildTypography({ fontFamily: params.fontFamily }),
    borderRadius: buildBorderRadiusTokens({ borderRadius: params.borderRadius })
  }
}
