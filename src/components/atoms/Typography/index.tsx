import { deepmerge } from 'deepmerge-ts'
import React, { useMemo } from 'react'
import { TextProps, Text, useWindowDimensions } from 'react-native'
import RenderHtml, { RenderHTMLProps } from 'react-native-render-html'

import useSurfaceContext from '../../../hooks/useSurfaceContext'
import useWoliFluidContext from '../../../hooks/useWoliFluidContext'
import {
  TypographyRole,
  TypographySize
} from '../../../utils/design_tokens/typograhy'

export interface TypographyBaseProps extends Omit<TextProps, 'children'> {
  value: string
  role: TypographyRole
  size: TypographySize
}

export interface TypographyHTMLProps extends Omit<RenderHTMLProps, 'source'> {
  value: string
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
  },
  HTML: (props: TypographyHTMLProps) => {
    const { tokens } = useWoliFluidContext()
    const surfaceContext = useSurfaceContext()
    const { width } = useWindowDimensions()

    const tagsStyles = useMemo(() => {
      return {
        h1: {
          color: surfaceContext.contentColor,
          ...tokens.typography['headline-large']
        },
        h2: {
          color: surfaceContext.contentColor,
          ...tokens.typography['headline-medium']
        },
        h3: {
          color: surfaceContext.contentColor,
          ...tokens.typography['headline-small']
        },
        h4: {
          color: surfaceContext.contentColor,
          ...tokens.typography['title-large']
        },
        h5: {
          color: surfaceContext.contentColor,
          ...tokens.typography['title-medium']
        },
        h6: {
          color: surfaceContext.contentColor,
          ...tokens.typography['title-small']
        },
        p: {
          color: surfaceContext.contentColor,
          ...tokens.typography['body-medium']
        },
        li: {
          color: surfaceContext.contentColor,
          ...tokens.typography['body-medium']
        },
        div: {
          color: surfaceContext.contentColor,
          ...tokens.typography['body-medium']
        }
      }
    }, [tokens.typography, surfaceContext.contentColor])

    return (
      <RenderHtml
        {...props}
        contentWidth={props.contentWidth ?? width}
        tagsStyles={deepmerge(tagsStyles, props.tagsStyles)}
        source={{
          html: props.value
        }}
      />
    )
  }
}
