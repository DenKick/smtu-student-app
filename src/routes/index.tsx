import React from 'react'
import { useColorScheme } from 'react-native'

import styled from '@emotion/native'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'

import useAppSelector from '~hooks/useAppSelector'
import AuthStack from '~routes/AuthStack'
import MainStack from '~routes/MainStack'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
`

const Navigation = () => {
  const { isAuthorized } = useAppSelector(state => state.user)
  const isDarkTheme = useColorScheme() === 'dark'

  return (
    <Wrapper>
      <NavigationContainer theme={isDarkTheme ? DarkTheme : undefined}>
        {isAuthorized ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </Wrapper>
  )
}

export default Navigation
