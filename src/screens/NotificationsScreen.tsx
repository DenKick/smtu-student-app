import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, ListRenderItemInfo, RefreshControl, ScrollView } from 'react-native'

import styled from '@emotion/native'

import NotificationListItem from '~components/NotificationListItem'
import ScreenLayout from '~components/ScreenLayout'
import Tabs from '~components/Tabs'
import ZeroState from '~components/ZeroState'
import { NotificationType } from '~constants/common'
import useAppSelector from '~hooks/useAppSelector'
import { useAppDispatch } from '~store/index'
import { fetchNotifications } from '~store/newsAndNotificationsSlice'
import { Notification } from '~types/newsAndNotifications'

const Wrapper = styled.ScrollView`
  width: 200%;
  height: 100%;
`

const tabs = ['Фонды', 'Уведомления']

const { width } = Dimensions.get('window')

const renderItem = ({ item }: ListRenderItemInfo<Notification>) => <NotificationListItem item={item} />

const AccountScreen: React.FC = () => {
  const {
    notifications: { content, isLoading, isError },
  } = useAppSelector(state => state.newsAndNotifications)

  const dispatch = useAppDispatch()

  const scrollViewRef = useRef<ScrollView>(null)
  const [activeTab, setActiveTab] = useState(0)

  const handleTabPress = (index: number) => {
    if (scrollViewRef.current) {
      setActiveTab(index)
      scrollViewRef.current.scrollTo({ x: width * 2 * index })
    }
  }

  const handleRefresh = () => {
    dispatch(fetchNotifications())
  }

  return (
    <ScreenLayout heading='Уведомления' offset={0} withBackButton>
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: '100%' }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabPress={handleTabPress} />
        <Wrapper
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{ width: '200%' }}
          horizontal
          pagingEnabled
        >
          <FlatList
            style={{ width: '100%' }}
            contentContainerStyle={{ width: '50%', paddingHorizontal: 16 }}
            data={content.filter(item => item.type !== NotificationType)}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            renderItem={renderItem}
            ListEmptyComponent={<ZeroState title='Нет уведомлений' />}
          />
          <FlatList
            style={{ width: '100%' }}
            contentContainerStyle={{ width: '50%', paddingHorizontal: 16 }}
            data={content.filter(item => item.type === NotificationType)}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            renderItem={renderItem}
            ListEmptyComponent={<ZeroState title='Нет уведомлений' />}
          />
        </Wrapper>
      </ScrollView>
    </ScreenLayout>
  )
}

export default AccountScreen
