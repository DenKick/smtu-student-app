import React from 'react'

import { useTheme } from '@emotion/react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import AccountIcon from '~icons/AccountIcon'
import HomeworkIcon from '~icons/HomeworkIcon'
import TimetableIcon from '~icons/TimetableIcon'
import AuthScreen from '~screens/AuthScreen'
import { RoutesNames } from '~types/routes'

const Drawer = createDrawerNavigator()

const getScreenOptions = (screenName: RoutesNames) => {
  switch (screenName) {
    case RoutesNames.Timetable:
      return {
        drawerIcon: ({ focused }: { focused: boolean }) => <TimetableIcon isActive={focused} />,
        drawerLabel: 'Расписание',
        title: 'Расписание',
      }
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
          paddingVertical: 10,
        },
        drawerContentContainerStyle: { backgroundColor: theme.colors.background.primary },
        drawerContentStyle: { backgroundColor: theme.colors.background.primary },
        drawerActiveTintColor: theme.colors.icons.active,
        drawerInactiveTintColor: theme.colors.icons.inactive,
        drawerActiveBackgroundColor: theme.colors.background.primary,
        sceneContainerStyle: {
          backgroundColor: theme.colors.background.primary,
        },
        headerStyle: {
          backgroundColor: theme.colors.background.primary,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.input.background,
          elevation: 0,
          height: 110,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: theme.colors.icons.inactive,
        },
      }}
    >
      <Drawer.Screen
        name={RoutesNames.Timetable}
        options={getScreenOptions(RoutesNames.Timetable)}
        component={AuthScreen}
      />
      <Drawer.Screen
        name={RoutesNames.Homework}
        options={getScreenOptions(RoutesNames.Homework)}
        component={AuthScreen}
      />
      <Drawer.Screen name={'OTHER'} options={getScreenOptions(RoutesNames.Timetable)} component={AuthScreen} />
      <Drawer.Screen
        name={RoutesNames.Account}
        options={getScreenOptions(RoutesNames.Account)}
        component={AuthScreen}
      />
    </Drawer.Navigator>
  )
}

export default AndroidMainNavigation
