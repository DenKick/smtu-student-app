import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItemInfo, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styled from '@emotion/native'

import NewsItem from '~components/NewsItem'
import ScreenLayout from '~components/ScreenLayout'
import { bottomOffset } from '~constants/platformSpecific'
import useAppSelector from '~hooks/useAppSelector'
import { useAppDispatch } from '~store/index'
import { fetchNews } from '~store/newsAndNotificationsSlice'
import { News } from '~types/newsAndNotifications'

const Wrapper = styled.View`
  height: 100%;
  padding: 0 ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const renderItem = ({ item }: ListRenderItemInfo<News>) => <NewsItem item={item} />

const NewsScreen: React.FC = () => {
  const {
    news: { isLoading, isError, content },
  } = useAppSelector(state => state.newsAndNotifications)

  const dispatch = useAppDispatch()
  const { bottom } = useSafeAreaInsets()
  const [scrollOffset, setScrollOffset] = useState(0)

  const handleRefreshNews = () => {
    dispatch(fetchNews())
  }

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.y
    setScrollOffset(offset)
  }

  useEffect(() => {
    if (!content.length) {
      handleRefreshNews()
    }
  }, [])

  return (
    <ScreenLayout heading='Новости' offset={scrollOffset} withBackButton>
      <Wrapper>
        <FlatList
          contentContainerStyle={{ paddingBottom: bottomOffset(bottom) + 150 }}
          showsVerticalScrollIndicator={false}
          refreshing={isLoading}
          onRefresh={handleRefreshNews}
          data={content}
          renderItem={renderItem}
          onScroll={handleScroll}
          scrollEventThrottle={20}
        />
      </Wrapper>
    </ScreenLayout>
  )
}

export default NewsScreen
