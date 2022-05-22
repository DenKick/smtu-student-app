import React from 'react'
import { Platform } from 'react-native'

import { Theme, useTheme } from '@emotion/react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import AndroidMainNavigation from '~routes/AndroidMainNavigation'
import IOSMainNavigation from '~routes/IOSMainNavigation'
import MessagesDetailsScreen from '~screens/MessagesDetailsScreen'
import MessagesScreen from '~screens/MessagesScreen'
import NewsDetailsScreen from '~screens/NewsDetailsScreen'
import NewsScreen from '~screens/NewsScreen'
import NotificationDetailsScreen from '~screens/NotificationDetailsScreen'
import NotificationsScreen from '~screens/NotificationsScreen'
import ProfileDetailsScreen from '~screens/ProfileDetailsScreen'
import SubjectScreen from '~screens/SubjectScreen'
import { RoutesNames, StackRouteParams } from '~types/routes'

const Stack = createStackNavigator<StackRouteParams>()

const screenOptions = (theme: Theme): StackNavigationOptions => ({
  headerTintColor: theme.colors.input.text,
  headerShown: Platform.select({ ios: false, default: true }),
  headerBackgroundContainerStyle: {
    backgroundColor: theme.colors.background.primary,
  },
  headerStyle: {
    backgroundColor: theme.colors.background.primary,
    elevation: 0,
    height: 60,
    shadowOpacity: 0,
  },
  presentation: 'modal',
  cardStyle: { flex: 1, backgroundColor: theme.colors.background.primary, borderRadius: 0 },
})

const mainScreenOptions: StackNavigationOptions = {
  headerShown: false,
}

const MainStack = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator initialRouteName={RoutesNames.PlatformNavigation} screenOptions={screenOptions(theme)}>
      <Stack.Screen
        name={RoutesNames.PlatformNavigation}
        options={mainScreenOptions}
        component={Platform.select({ ios: IOSMainNavigation, default: AndroidMainNavigation })}
      />
      <Stack.Screen name={RoutesNames.Subject} component={SubjectScreen} />
      <Stack.Screen name={RoutesNames.ProfileDetails} options={{ title: 'Профиль' }} component={ProfileDetailsScreen} />
      <Stack.Screen
        name={RoutesNames.News}
        options={{ presentation: 'card', title: 'Новости' }}
        component={NewsScreen}
      />
      <Stack.Screen
        name={RoutesNames.NewsDetails}
        options={({ route }) => ({ title: route.params.newsHeading })}
        component={NewsDetailsScreen}
      />
      <Stack.Screen
        name={RoutesNames.Notifications}
        options={{ presentation: 'card', title: 'Уведомления' }}
        component={NotificationsScreen}
      />
      <Stack.Screen
        name={RoutesNames.NotificationDetails}
        options={({ route }) => ({ title: route.params.heading })}
        component={NotificationDetailsScreen}
      />
      <Stack.Screen
        name={RoutesNames.Messages}
        options={{ presentation: 'card', title: 'Сообщения' }}
        component={MessagesScreen}
      />
      <Stack.Screen
        name={RoutesNames.MessagesDetails}
        options={({ route }) => ({ title: route.params.title })}
        component={MessagesDetailsScreen}
      />
    </Stack.Navigator>
  )
}

export default MainStack
