import React, { useEffect, useRef, useState } from 'react'
import { Animated, Keyboard, Platform } from 'react-native'
import { useDispatch } from 'react-redux'

import styled from '@emotion/native'

import Button from '~components/Button'
import Input from '~components/Input'
import Logo from '~components/Logo'
import { keyboardShowEvent, keyboardHideEvent, animationTiming } from '~constants/platformSpecific'
import { setIsAuthorized, setUser } from '~store/userSlice'

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

  const dispatch = useDispatch()

  const marginAnim = useRef(new Animated.Value(70)).current

  const handleAnimation = (newValue: number) => {
    Animated.timing(marginAnim, {
      toValue: newValue,
      duration: animationTiming,
      useNativeDriver: false,
    }).start()
  }

  const handleLoginPress = () => {
    dispatch(setIsAuthorized(true))
    dispatch(setUser(email))
  }

  useEffect(() => {
    Keyboard.addListener(keyboardShowEvent, () => {
      handleAnimation(10)
    })
    Keyboard.addListener(keyboardHideEvent, () => {
      handleAnimation(70)
    })

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow')
      Keyboard.removeAllListeners('keyboardDidHide')
    }
  }, [])

  useEffect(() => {
    if (email && password) {
      setIsLoginDisabled(false)
    } else {
      setIsLoginDisabled(true)
    }
  }, [email, password])

  return (
    <Wrapper behavior={Platform.select({ ios: 'padding', android: 'height' })}>
      <SafeView>
        <Animated.View style={{ marginTop: marginAnim }}>
          <Logo scale={0.6} />
        </Animated.View>
        <InputWrapper>
          <InputInnerWrapper>
            <Input value={email} placeholder='Электронная почта' setValue={setEmail} keyboardType='email-address' />
          </InputInnerWrapper>
          <InputInnerWrapper>
            <Input value={password} placeholder='Пароль' setValue={setPassword} isPassword />
          </InputInnerWrapper>
        </InputWrapper>
        <ButtonWrapper>
          <Button onPress={handleLoginPress} isDisabled={isLoginDisabled} label='Войти' />
        </ButtonWrapper>
      </SafeView>
    </Wrapper>
  )
}

export default AuthScreen
