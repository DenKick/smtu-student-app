import React, { SetStateAction, Dispatch } from 'react'
import {
  KeyboardType,
  NativeSyntheticEvent,
  Platform,
  TextInputChangeEventData,
  useColorScheme,
  View,
} from 'react-native'

import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

const InputField = styled.TextInput<{ isMultiline?: boolean; isDarkTheme?: boolean }>`
  background-color: ${({ theme }) =>
    Platform.select({ ios: theme.colors.input.background, default: theme.colors.background.secondary })};
  border-width: ${Platform.select({ ios: '0px', default: '1px' })};
  border-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.border.secondary : theme.colors.border.primary};
  border-style: solid;
  border-radius: ${({ theme }) => Platform.select({ ios: theme.dimensions.borderRadius, default: '5px' })};
  color: ${({ theme }) => theme.colors.input.text};
  padding: 11px 17px;
  width: 100%;
  height: ${({ isMultiline }) => (isMultiline ? '150px' : 'auto')};
`

const Label = styled.Text`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.input.text};
  position: absolute;
  padding: 0 3px;
  top: -9px;
  left: 15px;
  font-size: ${({ theme }) => theme.dimensions.fontSize.normal};
  z-index: 1;
`

interface Props {
  value: string
  placeholder: string
  setValue: Dispatch<SetStateAction<string>>
  isPassword?: boolean
  isLoading?: boolean
  multiline?: boolean
  keyboardType?: KeyboardType
}

const Input: React.FC<Props> = ({ value, setValue, placeholder, isPassword, keyboardType, isLoading, multiline }) => {
  const theme = useTheme()
  const isDarkTheme = useColorScheme() === 'dark'

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const newValue = e.nativeEvent.text
    setValue(newValue)
  }

  return (
    <View>
      {Platform.select({ ios: null, default: <Label>{placeholder}</Label> })}
      <InputField
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.input.placeholder}
        value={value}
        onChange={handleChange}
        secureTextEntry={isPassword}
        editable={!isLoading}
        multiline={multiline}
        isMultiline={multiline}
        isDarkTheme={isDarkTheme}
      />
    </View>
  )
}

export default Input
