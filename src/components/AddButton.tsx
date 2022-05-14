import React from 'react'

import styled from '@emotion/native'

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.common.primary};
  border-radius: 20px;
  height: 40px;
  width: 40px;
`

const VerticalLine = styled.View`
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: 4px;
  height: 20px;
  left: 19px;
  position: absolute;
  top: 10px;
  width: 2px;
`

const HorizontalLine = styled.View`
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: 4px;
  height: 2px;
  left: 10px;
  top: 19px;
  position: absolute;
  width: 20px;
`

interface Props {
  onPress: () => void
}

const AddButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <VerticalLine />
      <HorizontalLine />
    </Container>
  )
}

export default AddButton
