import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import useAppSelector from '~hooks/useAppSelector'
import AuthStack from '~routes/AuthStack'
import IOSMainNavigation from '~routes/Main'

const Navigation = () => {
  const { isAuthorized } = useAppSelector(state => state.user)
  return <NavigationContainer>{isAuthorized ? <IOSMainNavigation /> : <AuthStack />}</NavigationContainer>
}

export default Navigation
