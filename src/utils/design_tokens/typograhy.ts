import { TextStyle } from 'react-native'

export interface Typography {
  fontFamily: TextStyle['fontFamily']
  lineHeight: TextStyle['lineHeight']
  fontSize: TextStyle['fontSize']
  letterSpacing: TextStyle['letterSpacing']
  fontWeight: TextStyle['fontWeight']
}

export type TypographyRole = 'display' | 'headline' | 'title' | 'body' | 'label'
export type TypographySize = 'small' | 'medium' | 'large'

export type TypographyTokens = {
  [key in `${TypographyRole}-${TypographySize}`]: Typography
}

export interface BuildTypographyParams {
  fontFamily: TextStyle['fontFamily']
}

export default function buildTypography({
  fontFamily
}: BuildTypographyParams): TypographyTokens {
  return {
    'display-large': {
      fontFamily, // Regular
      lineHeight: 64,
      fontSize: 57,
      letterSpacing: 0,
      fontWeight: '400'
    },
    'display-medium': {
      fontFamily, // Regular
      lineHeight: 52,
      fontSize: 45,
      letterSpacing: 0,
      fontWeight: '400'
    },
    'display-small': {
      fontFamily, // Regular
      lineHeight: 44,
      fontSize: 36,
      letterSpacing: 0,
      fontWeight: '400'
    },
    'headline-large': {
      fontFamily, // Regular
      lineHeight: 40,
      fontSize: 32,
      letterSpacing: 0,
      fontWeight: '400'
    },
    'headline-medium': {
      fontFamily, // Regular
      lineHeight: 36,
      fontSize: 28,
      letterSpacing: 0,
      fontWeight: '400'
    },
    'headline-small': {
      fontFamily, // Regular
      lineHeight: 32,
      fontSize: 24,
      letterSpacing: 0,
      fontWeight: '400'
    },
    'title-large': {
      fontFamily, // Medium
      lineHeight: 28,
      fontSize: 22,
      letterSpacing: 0,
      fontWeight: '400'
    },
    'title-medium': {
      fontFamily, // Medium
      lineHeight: 24,
      fontSize: 16,
      letterSpacing: 0.15,
      fontWeight: '500'
    },
    'title-small': {
      fontFamily, // Medium
      lineHeight: 20,
      fontSize: 14,
      letterSpacing: 0.1,
      fontWeight: '500'
    },
    'label-large': {
      fontFamily, // Medium
      lineHeight: 20,
      fontSize: 14,
      letterSpacing: 0.1,
      fontWeight: '500'
    },
    'label-medium': {
      fontFamily, // Medium
      lineHeight: 16,
      fontSize: 12,
      letterSpacing: 0.5,
      fontWeight: '500'
    },
    'label-small': {
      fontFamily, // Medium
      lineHeight: 16,
      fontSize: 11,
      letterSpacing: 0.5,
      fontWeight: '500'
    },
    'body-large': {
      fontFamily, // Regular
      lineHeight: 24,
      fontSize: 16,
      letterSpacing: 0.5,
      fontWeight: '400'
    },
    'body-medium': {
      fontFamily, // Regular
      lineHeight: 20,
      fontSize: 14,
      letterSpacing: 0.25,
      fontWeight: '400'
    },
    'body-small': {
      fontFamily, // Regular
      lineHeight: 16,
      fontSize: 12,
      letterSpacing: 0.4,
      fontWeight: '400'
    }
  }
}
