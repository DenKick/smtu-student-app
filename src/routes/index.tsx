import React from 'react'
import { Platform } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import useAppSelector from '~hooks/useAppSelector'
import AndroidMainNavigation from '~routes/AndroidMainNavigation'
import AuthStack from '~routes/AuthStack'
import IOSMainNavigation from '~routes/IOSMainNavigation'

const Navigation = () => {
  const { isAuthorized } = useAppSelector(state => state.user)

  const platformNavigation = Platform.OS === 'android' ? <AndroidMainNavigation /> : <IOSMainNavigation />

  return <NavigationContainer>{isAuthorized ? platformNavigation : <AuthStack />}</NavigationContainer>
}

export default Navigation
