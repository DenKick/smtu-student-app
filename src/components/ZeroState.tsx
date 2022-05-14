import React from 'react'

import styled from '@emotion/native'

const Container = styled.View`
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const Text = styled.Text`
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  color: ${({ theme }) => theme.colors.input.text};
  text-align: center;
`

interface Props {
  title: string
}

const ZeroState: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}

export default ZeroState
