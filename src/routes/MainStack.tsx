import React from 'react'
import { Platform, useColorScheme } from 'react-native'

import { Theme, useTheme } from '@emotion/react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import AndroidMainNavigation from '~routes/AndroidMainNavigation'
import IOSMainNavigation from '~routes/IOSMainNavigation'
import SubjectScreen from '~screens/SubjectScreen'
import { RoutesNames, TimetableStackRouteParams } from '~types/routes'

const Stack = createStackNavigator<TimetableStackRouteParams>()

const screenOptions = (theme: Theme, isDarkTheme: boolean): StackNavigationOptions => ({
  headerTintColor: theme.colors.common.white,
  headerShown: Platform.select({ ios: false, default: true }),
  headerBackgroundContainerStyle: {
    backgroundColor: theme.colors.background.secondary,
  },
  headerStyle: {
    backgroundColor: isDarkTheme ? theme.colors.background.secondary : theme.colors.button.backgroundPrimary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.primary,
    elevation: 0,
    height: 60,
    shadowOpacity: 0,
  },
  presentation: Platform.select({ ios: 'modal', default: 'card' }),
  cardStyle: { flex: 1, backgroundColor: theme.colors.background.primary, borderRadius: 0 },
})

const mainScreenOptions: StackNavigationOptions = {
  headerShown: false,
}

const MainStack = () => {
  const theme = useTheme()
  const isDarkTheme = useColorScheme() === 'dark'

  return (
    <Stack.Navigator
      initialRouteName={RoutesNames.PlatformNavigation}
      screenOptions={screenOptions(theme, isDarkTheme)}
    >
      <Stack.Screen
        name={RoutesNames.PlatformNavigation}
        options={mainScreenOptions}
        component={Platform.select({ ios: IOSMainNavigation, default: AndroidMainNavigation })}
      />
      <Stack.Screen name={RoutesNames.Subject} component={SubjectScreen} />
    </Stack.Navigator>
  )
}

export default MainStack
