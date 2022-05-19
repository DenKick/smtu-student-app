import React from 'react'
import { Platform } from 'react-native'

import { Theme, useTheme } from '@emotion/react'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'

import AuthScreen from '~screens/AuthScreen'
import { RoutesNames } from '~types/routes'

const Stack = createStackNavigator()

const screenOptions = (theme: Theme): StackNavigationOptions => ({
  headerShown: false,
  cardStyle: {
    backgroundColor: Platform.select({
      ios: theme.colors.background.primary,
      default: theme.colors.background.secondary,
    }),
  },
})

const AuthStack: React.FC = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator initialRouteName={RoutesNames.Auth} screenOptions={screenOptions(theme)}>
      <Stack.Screen name={RoutesNames.Auth} component={AuthScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
