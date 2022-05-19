import React from 'react'
import { Platform, useColorScheme } from 'react-native'

import styled from '@emotion/native'

const Wrapper = styled.View`
  width: 100%;
`

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  padding: ${Platform.select({ ios: '4px', default: '0px' })};
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
`

const Tab = styled.TouchableOpacity<{ width: number; isActive: boolean; isDarkTheme: boolean }>`
  background-color: ${({ theme, isActive, isDarkTheme }) =>
    isActive
      ? Platform.select({
          ios: theme.colors.input.placeholder,
          default: theme.colors.button.backgroundPrimary,
        })
      : Platform.select({
          ios: theme.colors.background.secondary,
          default: isDarkTheme ? theme.colors.background.secondary : theme.colors.handleComponent,
        })};
  border-radius: ${({ theme }) => Platform.select({ ios: theme.dimensions.borderRadius, default: '0px' })};
  padding: 8px 0;
  width: ${({ width }) => `${width}%`};
`

const TabLabel = styled.Text<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) =>
    Platform.select({
      ios: theme.colors.input.text,
      default: isActive ? theme.colors.button.textColor : theme.colors.input.text,
    })};
  text-align: center;
`

interface Props {
  tabs: string[]
  activeTab: number
  onTabPress: (index: number) => void
}

const Tabs: React.FC<Props> = ({ tabs, activeTab, onTabPress }) => {
  const isDarkTheme = useColorScheme() === 'dark'
  return (
    <Wrapper>
      <Container>
        {tabs.map((tab, index) => (
          <Tab
            key={`tab-${tab}`}
            width={Platform.select({ ios: 98 / tabs.length, default: 100 / tabs.length })}
            isActive={index === activeTab}
            onPress={() => onTabPress(index)}
            isDarkTheme={isDarkTheme}
          >
            <TabLabel isActive={index === activeTab}>{tab}</TabLabel>
          </Tab>
        ))}
      </Container>
    </Wrapper>
  )
}

export default Tabs
