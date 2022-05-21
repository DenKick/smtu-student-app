import React, { useEffect, useState } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'

import styled from '@emotion/native'

import PerformanceListItem from '~components/PerformanceListItem'
import ScreenLayout from '~components/ScreenLayout'
import Tabs from '~components/Tabs'
import ZeroState from '~components/ZeroState'
import { bottomOffset, IOSTabBarHeight } from '~constants/platformSpecific'
import useAppSelector from '~hooks/useAppSelector'
import { useAppDispatch } from '~store/index'
import { fetchPerformance } from '~store/performanceSlice'
import { selectSemester } from '~store/selectors'

const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.sectionHeading};
  text-align: center;
  margin-top: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const PerformanceScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const [activeTab, setActiveTab] = useState(0)
  const [scrollOffset, setScrollOffset] = useState(0)
  const tabs = useAppSelector(state => selectSemester(state))
  const { performance, isLoading } = useAppSelector(state => state.performance)

  const handleTabPress = (index: number) => {
    setActiveTab(index)
  }

  const handleRefresh = () => {
    dispatch(fetchPerformance())
  }

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.y
    setScrollOffset(offset)
  }

  useEffect(() => {
    if (!performance.length) {
      dispatch(fetchPerformance())
    }
  }, [])

  return (
    <ScreenLayout heading='Успеваемость' offset={scrollOffset}>
      <Heading>Семестр</Heading>
      {!!tabs.length && <Tabs tabs={tabs} activeTab={activeTab} onTabPress={handleTabPress} />}
      <FlatList
        onScroll={handleScroll}
        scrollEventThrottle={20}
        showsVerticalScrollIndicator={false}
        style={{ maxHeight: '90%' }}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: bottomOffset(IOSTabBarHeight + 40),
          flexGrow: 1,
        }}
        refreshing={isLoading}
        removeClippedSubviews={true}
        keyExtractor={item => `${item.semester}-${item.subject}-${item.ssrCount}`}
        onRefresh={handleRefresh}
        data={performance.filter(w => w.semester === activeTab + 1)}
        renderItem={item => <PerformanceListItem item={item.item} />}
        ListEmptyComponent={!isLoading ? <ZeroState title='Нет оценок' /> : null}
      />
    </ScreenLayout>
  )
}

export default PerformanceScreen
