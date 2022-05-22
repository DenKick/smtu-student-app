import React from 'react'

import styled from '@emotion/native'
import { StackScreenProps } from '@react-navigation/stack'

import ScreenLayout from '~components/ScreenLayout'
import { bottomOffset, IOSTabBarHeight } from '~constants/platformSpecific'
import useAppSelector from '~hooks/useAppSelector'
import { selectNewsByHeading } from '~store/selectors'
import { RoutesNames, StackRouteParams } from '~types/routes'

const Wrapper = styled.ScrollView`
  height: 100%;
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const GrayText = styled.Text<{ rightAlign?: boolean }>`
  color: ${({ theme }) => theme.colors.input.placeholder};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  text-align: ${({ rightAlign }) => (rightAlign ? 'right' : 'left')};
`

const NewsText = styled.TextInput`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.extraLarge};
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding} 0;
`

const NewsDetailsScreen: React.FC<StackScreenProps<StackRouteParams, RoutesNames.NewsDetails>> = ({
  route: { params },
}) => {
  const news = useAppSelector(state => selectNewsByHeading(state, params.newsHeading))

  if (!news) {
    return null
  }

  return (
    <ScreenLayout heading={news.heading} offset={IOSTabBarHeight} withHandleComponent>
      <Wrapper contentContainerStyle={{ paddingBottom: bottomOffset(120) }} showsVerticalScrollIndicator={false}>
        <GrayText>{news.date}</GrayText>
        <NewsText multiline editable={false} scrollEnabled={false}>
          {news.text}
        </NewsText>
        <GrayText rightAlign>{news.author}</GrayText>
      </Wrapper>
    </ScreenLayout>
  )
}

export default NewsDetailsScreen
