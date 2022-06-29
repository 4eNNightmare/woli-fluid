import React from 'react'
import { TextProps, Text } from 'react-native'

import useSurfaceContext from '../../../hooks/useSurfaceContext'
import useWoliFluidContext from '../../../hooks/useWoliFluidContext'

export interface TypographyBaseProps extends Omit<TextProps, 'children'> {
  value: string
  role: 'display' | 'headline' | 'title' | 'label' | 'body'
  size: 'large' | 'medium' | 'small'
}

export function TypographyBase({
  value,
  role,
  size,
  style,
  ...rest
}: TypographyBaseProps) {
  const { tokens } = useWoliFluidContext()
  const surfaceContext = useSurfaceContext()

  return (
    <Text
      style={[
        tokens.typography[`${role}-${size}`],
        { color: surfaceContext.contentColor },
        style
      ]}
      {...rest}
    >
      {value}
    </Text>
  )
}

export interface TypographyProps
  extends Omit<TypographyBaseProps, 'role' | 'size'> {}

export default {
  Display: {
    Small: (props: TypographyProps) => (
      <TypographyBase role="display" size="small" {...props} />
    ),
    Medium: (props: TypographyProps) => (
      <TypographyBase role="display" size="medium" {...props} />
    ),
    Large: (props: TypographyProps) => (
      <TypographyBase role="display" size="large" {...props} />
    )
  },
  Headline: {
    Small: (props: TypographyProps) => (
      <TypographyBase role="headline" size="small" {...props} />
    ),
    Medium: (props: TypographyProps) => (
      <TypographyBase role="headline" size="medium" {...props} />
    ),
    Large: (props: TypographyProps) => (
      <TypographyBase role="headline" size="large" {...props} />
    )
  },
  Title: {
    Small: (props: TypographyProps) => (
      <TypographyBase role="title" size="small" {...props} />
    ),
    Medium: (props: TypographyProps) => (
      <TypographyBase role="title" size="medium" {...props} />
    ),
    Large: (props: TypographyProps) => (
      <TypographyBase role="title" size="large" {...props} />
    )
  },
  Label: {
    Small: (props: TypographyProps) => (
      <TypographyBase role="label" size="small" {...props} />
    ),
    Medium: (props: TypographyProps) => (
      <TypographyBase role="label" size="medium" {...props} />
    ),
    Large: (props: TypographyProps) => (
      <TypographyBase role="label" size="large" {...props} />
    )
  },
  Body: {
    Small: (props: TypographyProps) => (
      <TypographyBase role="body" size="small" {...props} />
    ),
    Medium: (props: TypographyProps) => (
      <TypographyBase role="body" size="medium" {...props} />
    ),
    Large: (props: TypographyProps) => (
      <TypographyBase role="body" size="large" {...props} />
    )
  }
}
