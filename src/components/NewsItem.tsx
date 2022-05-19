import React from 'react'

import styled from '@emotion/native'

import GrayText from '~components/GrayText'
import HeadingText from '~components/HeadingText'
import useAppNavigation from '~hooks/useAppNavigation'
import { News } from '~types/newsAndNotifications'
import { RoutesNames } from '~types/routes'

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding} 0px;
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  width: 100%;
`

const InfoBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

interface Props {
  item: News
}

const NewsItem: React.FC<Props> = ({ item }) => {
  const navigation = useAppNavigation()

  const handlePress = () => {
    navigation.navigate(RoutesNames.NewsDetails, { newsHeading: item.heading })
  }

  return (
    <Container onPress={handlePress}>
      <HeadingText>{item.heading}</HeadingText>
      <InfoBlock>
        <GrayText margin='8px 0 0'>{item.date}</GrayText>
        <GrayText margin='8px 0 0'>{item.author}</GrayText>
      </InfoBlock>
    </Container>
  )
}

export default NewsItem
