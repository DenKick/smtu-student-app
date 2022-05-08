import React from 'react'

import { useTheme } from '@emotion/react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthScreen from '~screens/AuthScreen'
import { RoutesNames } from '~types/routes'

const Stack = createNativeStackNavigator()

const AuthStack: React.FC = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName={RoutesNames.Auth}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background.primary,
        },
      }}
    >
      <Stack.Screen name={RoutesNames.Auth} component={AuthScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
