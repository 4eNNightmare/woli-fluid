export interface RadiusSymmetryModifier {
    startOnly: {
        borderTopLeftRadius: number
        borderBottomLeftRadius: number
    },
    endOnly: {
        borderTopRightRadius: number
        borderBottomRightRadius: number
    },
    topOnly: {
        borderTopLeftRadius: number
        borderTopRightRadius: number
    },
    bottomOnly: {
        borderBottomLeftRadius: number
        borderBottomRightRadius: number
    },
    all: {
        borderTopLeftRadius: number
        borderTopRightRadius: number
        borderBottomLeftRadius: number
        borderBottomRightRadius: number
    }
}


export interface BorderRadiusTokens {
    none: RadiusSymmetryModifier
    extraSmall: RadiusSymmetryModifier
    small: RadiusSymmetryModifier
    medium: RadiusSymmetryModifier
    large: RadiusSymmetryModifier
    extraLarge: RadiusSymmetryModifier
    halfHeight: (height: number) => RadiusSymmetryModifier
}

function generateSymmetryModifiers(radius: number): RadiusSymmetryModifier {
    return {
        startOnly: {
            borderTopLeftRadius: radius,
            borderBottomLeftRadius: radius
        },
        endOnly: {
            borderTopRightRadius: radius,
            borderBottomRightRadius: radius
        },
        topOnly: {
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius
        },
        bottomOnly: {
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius
        },
        all: {
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius
        }
    }
}

export interface BuildBorderRadiusTokensParams {
    borderRadius: {
        none: number
        extraSmall: number
        small: number
        medium: number
        large: number
        extraLarge: number
    }
}

export function buildBorderRadiusTokens(params: BuildBorderRadiusTokensParams): BorderRadiusTokens {
    return {
        none: generateSymmetryModifiers(params.borderRadius.none),
        extraSmall: generateSymmetryModifiers(params.borderRadius.extraSmall), 
        small: generateSymmetryModifiers(params.borderRadius.small),
        medium: generateSymmetryModifiers(params.borderRadius.medium),
        large: generateSymmetryModifiers(params.borderRadius.large),
        extraLarge: generateSymmetryModifiers(params.borderRadius.extraLarge),
        halfHeight: (height: number) => generateSymmetryModifiers(height / 2)
    }
}