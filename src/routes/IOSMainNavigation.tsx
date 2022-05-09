import React from 'react'

import { useTheme } from '@emotion/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { routesConfig } from '~config/routesConfig'
import AccountIcon from '~icons/AccountIcon'
import HomeworkIcon from '~icons/HomeworkIcon'
import { RoutesNames } from '~types/routes'

const Tab = createBottomTabNavigator()

const getScreenOptions = (screenName: RoutesNames) => {
  switch (screenName) {
    case RoutesNames.Homework:
      return {
        tabBarIcon: ({ focused }: { focused: boolean }) => <HomeworkIcon isActive={focused} />,
        tabBarLabel: 'Задания',
      }
    case RoutesNames.Account:
      return {
        tabBarIcon: ({ focused }: { focused: boolean }) => <AccountIcon isActive={focused} />,
        tabBarLabel: 'Профиль',
      }
    default:
      return {
        tabBarIcon: ({ focused }: { focused: boolean }) => <HomeworkIcon isActive={focused} />,
        tabBarLabel: 'Расписание',
      }
  }
}

const IOSMainNavigation = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.colors.background.primary,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background.secondary,
          height: 90,
          borderTopWidth: 1,
          borderTopColor: theme.colors.border.primary,
        },
      }}
    >
      {routesConfig.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.screen}
          options={getScreenOptions(route.name)}
        />
      ))}
    </Tab.Navigator>
  )
}

export default IOSMainNavigation
