import React from 'react'
import { FlatList } from 'react-native'

import { useFluidContext } from '../../../hooks/useFluidContext'
import { Divider } from '../../atoms/Divider'
import { Surface, SurfaceProps } from '../../atoms/Surface'
import { Tab } from '../../atoms/Tab'
import styles from './styles'

export interface TabsProps extends Omit<SurfaceProps, 'children'> {
  data: {
    key: string
    title: string
  }[]
  selectedTab?: string
  onChange: (key: string) => void
}

export function Tabs({
  data,
  selectedTab,
  onChange,
  style,
  ...rest
}: TabsProps) {
  const { tokens } = useFluidContext()

  return (
    <>
      <Surface
        containerColor={tokens.colors.surface}
        style={[styles.tabs, style]}
        {...rest}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Tab
              id={item.key}
              key={item.key}
              title={item.title}
              style={{ marginHorizontal: 8 }}
              selected={item.key === selectedTab}
              onPress={onChange}
            />
          )}
          horizontal
        />
      </Surface>
      <Divider />
    </>
  )
}
