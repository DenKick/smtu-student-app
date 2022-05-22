import React, { useEffect, useRef, useState } from 'react'
import { Animated, Keyboard, StatusBar, useColorScheme } from 'react-native'

import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

import Button from '~components/Button'
import Input from '~components/Input'
import Logo from '~components/Logo'
import {
  keyboardShowEvent,
  keyboardHideEvent,
  animationTiming,
  keyboardAvoidingViewBehavior,
} from '~constants/platformSpecific'
import isCorrectEmail from '~helpers/isCorrectEmail'
import useAppSelector from '~hooks/useAppSelector'
import { useAppDispatch } from '~store/index'
import { createUserLogin, setUser } from '~store/userSlice'

const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  padding: ${({ theme }) => `0px ${theme.dimensions.commonHorizontalPadding}`};
`

const SafeView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

const InputWrapper = styled.View`
  width: 100%;
`

const InputInnerWrapper = styled.View`
  margin: 11px 0;
`

const ButtonWrapper = styled.View`
  margin-bottom: 20px;
  width: 100%;
`

const AuthScreen: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginDisabled, setIsLoginDisabled] = useState(true)

  const theme = useTheme()
  const dispatch = useAppDispatch()
  const isDarkTheme = useColorScheme() === 'dark'
  const { isLoadingUser } = useAppSelector(state => state.user)

  const marginAnim = useRef(new Animated.Value(70)).current

  const handleAnimation = (newValue: number) => {
    Animated.timing(marginAnim, {
      toValue: newValue,
      duration: animationTiming,
      useNativeDriver: false,
    }).start()
  }

  const handleLoginPress = () => {
    dispatch(setUser(email))
    dispatch(createUserLogin())
  }

  useEffect(() => {
    const showListener = Keyboard.addListener(keyboardShowEvent, () => {
      handleAnimation(10)
    })
    const hideListener = Keyboard.addListener(keyboardHideEvent, () => {
      handleAnimation(70)
    })

    return () => {
      showListener.remove()
      hideListener.remove()
    }
  }, [])

  useEffect(() => {
    if (isCorrectEmail(email) && password.length > 8) {
      setIsLoginDisabled(false)
    } else {
      setIsLoginDisabled(true)
    }
  }, [email, password])

  return (
    <Wrapper behavior={keyboardAvoidingViewBehavior}>
      <StatusBar
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background.secondary}
      />
      <SafeView>
        <Animated.View style={{ marginTop: marginAnim }}>
          <Logo scale={0.6} />
        </Animated.View>
        <InputWrapper>
          <InputInnerWrapper>
            <Input
              value={email}
              placeholder='Электронная почта'
              setValue={setEmail}
              isLoading={isLoadingUser}
              keyboardType='email-address'
            />
          </InputInnerWrapper>
          <InputInnerWrapper>
            <Input value={password} placeholder='Пароль' setValue={setPassword} isLoading={isLoadingUser} isPassword />
          </InputInnerWrapper>
        </InputWrapper>
        <ButtonWrapper>
          <Button onPress={handleLoginPress} isDisabled={isLoginDisabled} isLoading={isLoadingUser} label='Войти' />
        </ButtonWrapper>
      </SafeView>
    </Wrapper>
  )
}

export default AuthScreen
