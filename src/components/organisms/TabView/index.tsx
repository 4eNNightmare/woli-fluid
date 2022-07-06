import React from 'react'

import { useFluidContext } from '../../../hooks/useFluidContext'
import { Divider } from '../../atoms/Divider'
import { Surface } from '../../atoms/Surface'
import { Tabs } from '../../molecules/Tabs'

export interface TabViewProps {
  data: {
    key: string
    title: string
    component: React.ReactNode
  }[]
}

export function TabView({ data }: TabViewProps) {
  const { tokens } = useFluidContext()
  const [selectedTab, setSelectedTab] = React.useState(data[0].key)

  return (
    <Surface containerColor={tokens.colors.background}>
      <Tabs
        data={data}
        containerColor={tokens.colors.surface}
        selectedTab={selectedTab}
        onChange={(id) => {
          setSelectedTab(id)
        }}
      />
      <Surface containerColor={tokens.colors.background}>
        {data.find((tab) => tab.key === selectedTab)?.component}
      </Surface>
    </Surface>
  )
}
