import React from 'react';
import useWoliFluidContext from '../../../hooks/useWoliFluidContext';
import Divider from '../../atoms/Divider/indenx';
import Surface from '../../atoms/Surface';
import Tabs from '../../molecules/Tabs';

export interface TabViewProps {
  data: {
    id: string
    title: string
    component: React.ReactNode
  }[]
}


export default function TabView({data}: TabViewProps) {
  const { tokens } = useWoliFluidContext()
  const [selectedTab, setSelectedTab] = React.useState(data[0].id)

  return (
    <Surface containerColor={tokens.colors.background}>
      <Tabs data={data} containerColor={tokens.colors.surface} selectedTab={selectedTab} onChange={(id) => {
        setSelectedTab(id)
      }}/>
      <Divider/>
      {
        <Surface containerColor={tokens.colors.background}>
          {data.find(tab => tab.id === selectedTab)?.component}
        </Surface>
        }
    </Surface>
  )
}
