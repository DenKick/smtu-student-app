import React, { SetStateAction, Dispatch } from 'react'
import { KeyboardType, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

const InputField = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  color: ${({ theme }) => theme.colors.input.text};
  padding: 11px 17px;
  width: 100%;
`

interface Props {
  value: string
  placeholder: string
  setValue: Dispatch<SetStateAction<string>>
  isPassword?: boolean
  keyboardType?: KeyboardType
}

const Input: React.FC<Props> = ({ value, setValue, placeholder, isPassword, keyboardType }) => {
  const theme = useTheme()

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const newValue = e.nativeEvent.text
    setValue(newValue)
  }

  return (
    <InputField
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.input.placeholder}
      value={value}
      onChange={handleChange}
      secureTextEntry={isPassword}
    />
  )
}

export default Input
