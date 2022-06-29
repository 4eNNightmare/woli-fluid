import React from 'react'
import { FlatList } from 'react-native'

import useWoliFluidContext from '../../../hooks/useWoliFluidContext'
import Surface, { SurfaceProps } from '../../atoms/Surface'
import Tab from '../../atoms/Tab'
import styles from './styles'

export interface TabsProps extends Omit<SurfaceProps, 'children'> {
  data: {
    id: string
    title: string
  }[]
  selectedTab?: string
  onChange: (key: string) => void
}

export default function Tabs({
  data,
  selectedTab,
  onChange,
  style,
  ...rest
}: TabsProps) {
  const { tokens } = useWoliFluidContext()

  return (
    <Surface
      elevation={1}
      containerColor={tokens.colors.surface}
      style={[styles.tabs, style]}
      {...rest}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Tab
            id={item.id}
            title={item.title}
            style={{ marginRight: 8 }}
            selected={item.id === selectedTab}
            onPress={onChange}
          />
        )}
        horizontal
      />
    </Surface>
  )
}
