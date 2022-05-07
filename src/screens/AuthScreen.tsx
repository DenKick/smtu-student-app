import React from 'react'

import styled from '@emotion/native'

import useAppSelector from '~hooks/useAppSelector'

const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Text = styled.Text`
  color: #ffffff;
`

const AuthScreen: React.FC = () => {
  const { user } = useAppSelector(state => state.user)
  return (
    <Wrapper>
      <Text>{user}</Text>
    </Wrapper>
  )
}

export default AuthScreen
