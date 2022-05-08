import React from 'react'

import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

const ButtonContainer = styled.TouchableOpacity<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  padding: 14px 0;
  width: 100%;
`

const Text = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: bold;
  text-align: center;
  width: 100%;
`

interface Props {
  label: string
  onPress: () => void
  isDisabled?: boolean
  color?: string
  background?: string
}

const Button: React.FC<Props> = ({ label, isDisabled, color, background, onPress }) => {
  const theme = useTheme()

  const buttonBackgroundColor = background || theme.colors.button.backgroundPrimary
  const textColor = color || theme.colors.button.textColor

  return (
    <ButtonContainer
      backgroundColor={isDisabled ? theme.colors.button.backgroundDisabled : buttonBackgroundColor}
      disabled={isDisabled}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text color={isDisabled ? theme.colors.button.textDisabled : textColor}>{label}</Text>
    </ButtonContainer>
  )
}

export default Button
