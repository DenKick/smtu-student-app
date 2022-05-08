import React from 'react'

import { useTheme } from '@emotion/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountIcon from '~icons/AccountIcon'
import HomeworkIcon from '~icons/HomeworkIcon'
import TimetableIcon from '~icons/TimetableIcon'
import AuthScreen from '~screens/AuthScreen'
import { RoutesNames } from '~types/routes'

const Tab = createBottomTabNavigator()

const getScreenOptions = (screenName: RoutesNames) => {
  switch (screenName) {
    case RoutesNames.Timetable:
      return {
        tabBarIcon: ({ focused }: { focused: boolean }) => <TimetableIcon isActive={focused} />,
        tabBarLabel: 'Расписание',
      }
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
          backgroundColor: theme.colors.background.primary,
          height: 90,
          borderTopWidth: 1,
          borderTopColor: theme.colors.input.background,
        },
      }}
    >
      <Tab.Screen
        name={RoutesNames.Timetable}
        component={AuthScreen}
        options={{ ...getScreenOptions(RoutesNames.Timetable) }}
      />
      <Tab.Screen
        name={RoutesNames.Homework}
        component={AuthScreen}
        options={{ ...getScreenOptions(RoutesNames.Homework) }}
      />
      <Tab.Screen name={'THIRD'} component={AuthScreen} options={{ ...getScreenOptions(RoutesNames.Timetable) }} />
      <Tab.Screen
        name={RoutesNames.Account}
        component={AuthScreen}
        options={{ ...getScreenOptions(RoutesNames.Account) }}
      />
    </Tab.Navigator>
  )
}

export default IOSMainNavigation
