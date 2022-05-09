import React from 'react'

import { useTheme } from '@emotion/react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { routesConfig } from '~config/routesConfig'
import AccountIcon from '~icons/AccountIcon'
import HomeworkIcon from '~icons/HomeworkIcon'
import TimetableIcon from '~icons/TimetableIcon'
import { RoutesNames } from '~types/routes'

const Drawer = createDrawerNavigator()

const getScreenOptions = (screenName: RoutesNames) => {
  switch (screenName) {
    case RoutesNames.Homework:
      return {
        drawerIcon: ({ focused }: { focused: boolean }) => <HomeworkIcon isActive={focused} />,
        drawerLabel: 'Задания',
        title: 'Задания',
      }
    case RoutesNames.Account:
      return {
        drawerIcon: ({ focused }: { focused: boolean }) => <AccountIcon isActive={focused} />,
        drawerLabel: 'Профиль',
        title: 'Профиль',
      }
    default:
      return {
        drawerIcon: ({ focused }: { focused: boolean }) => <TimetableIcon isActive={focused} />,
        drawerLabel: 'Расписание',
        title: 'Расписание',
      }
  }
}

const AndroidMainNavigation = () => {
  const theme = useTheme()
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: theme.colors.icons.active,
        drawerItemStyle: {
          borderRadius: 10,
          marginVertical: 10,
        },
        drawerContentStyle: { backgroundColor: theme.colors.background.secondary },
        drawerActiveTintColor: theme.colors.icons.active,
        drawerInactiveTintColor: theme.colors.icons.inactive,
        drawerActiveBackgroundColor: theme.colors.background.secondary,
        sceneContainerStyle: {
          backgroundColor: theme.colors.background.primary,
        },
        headerStyle: {
          backgroundColor: theme.colors.background.secondary,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.border.primary,
          elevation: 0,
          height: 60,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: theme.colors.icons.inactive,
        },
      }}
    >
      {routesConfig.map(route => (
        <Drawer.Screen
          key={route.name}
          name={route.name}
          component={route.screen}
          options={getScreenOptions(route.name)}
        />
      ))}
    </Drawer.Navigator>
  )
}

export default AndroidMainNavigation
