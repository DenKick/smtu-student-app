import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'

import { Theme, useTheme } from '@emotion/react'
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer'

import { routesConfig } from '~config/routesConfig'
import AccountIcon from '~icons/AccountIcon'
import HomeworkIcon from '~icons/HomeworkIcon'
import PerformanceIcon from '~icons/PerformanceIcon'
import TimetableIcon from '~icons/TimetableIcon'
import { RoutesNames } from '~types/routes'

const Drawer = createDrawerNavigator()

const screenOptions = (theme: Theme): DrawerNavigationOptions => ({
  headerTintColor: theme.colors.input.text,
  drawerItemStyle: {
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  drawerContentStyle: {
    backgroundColor: theme.colors.background.secondary,
  },
  drawerActiveTintColor: theme.colors.icons.active,
  drawerInactiveTintColor: theme.colors.icons.inactive,
  drawerActiveBackgroundColor: theme.colors.common.primary,
  sceneContainerStyle: {
    backgroundColor: theme.colors.background.primary,
  },
  headerStyle: {
    backgroundColor: theme.colors.background.primary,
    elevation: 0,
    height: 60,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    color: theme.colors.input.text,
  },
})

const getScreenOptions = (screenName: RoutesNames) => {
  switch (screenName) {
    case RoutesNames.Homework:
      return {
        drawerIcon: ({ focused }: { focused: boolean }) => <HomeworkIcon isActive={focused} />,
        drawerLabel: 'Задания',
        title: 'Задания',
      }
    case RoutesNames.Performance:
      return {
        drawerIcon: ({ focused }: { focused: boolean }) => <PerformanceIcon isActive={focused} />,
        drawerLabel: 'Успеваемость',
        title: 'Успеваемость',
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
  const isDarkTheme = useColorScheme() === 'dark'

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background.primary}
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <Drawer.Navigator useLegacyImplementation={false} screenOptions={screenOptions(theme)}>
        {routesConfig.map(route => (
          <Drawer.Screen
            key={route.name}
            name={route.name}
            component={route.screen}
            options={getScreenOptions(route.name)}
          />
        ))}
      </Drawer.Navigator>
    </>
  )
}

export default AndroidMainNavigation
