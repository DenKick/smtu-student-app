import React from 'react'

import { useTheme } from '@emotion/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { routesConfig } from '~config/routesConfig'
import { IOSTabBarHeight } from '~constants/platformSpecific'
import AccountIcon from '~icons/AccountIcon'
import HomeworkIcon from '~icons/HomeworkIcon'
import PerformanceIcon from '~icons/PerformanceIcon'
import { RoutesNames } from '~types/routes'

const Tab = createBottomTabNavigator()

const getScreenOptions = (screenName: RoutesNames) => {
  switch (screenName) {
    case RoutesNames.Homework:
      return {
        tabBarIcon: ({ focused }: { focused: boolean }) => <HomeworkIcon isActive={focused} />,
        tabBarLabel: 'Задания',
      }
    case RoutesNames.Performance:
      return {
        tabBarIcon: ({ focused }: { focused: boolean }) => <PerformanceIcon isActive={focused} />,
        tabBarLabel: 'Успеваемость',
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
          height: IOSTabBarHeight,
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
