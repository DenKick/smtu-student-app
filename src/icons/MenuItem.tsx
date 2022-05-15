import React from 'react'

import styled from '@emotion/native'

import ChevronIcon from '~icons/Chevron'
import { RoutesNames } from '~types/routes'

const Container = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border.primary};
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const InnerContainer = styled.View`
  align-items: center;
  flex-direction: row;
`

const ProfileName = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  margin-left: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

interface Props {
  title: string
  route: RoutesNames
}

const MenuItem: React.FC<Props> = ({ title, route }) => {
  return (
    <Container>
      <InnerContainer>
        <ProfileName>{title}</ProfileName>
      </InnerContainer>
      <InnerContainer>
        <ChevronIcon />
      </InnerContainer>
    </Container>
  )
}

export default MenuItem
