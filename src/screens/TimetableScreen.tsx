import React, { useState } from 'react'
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import ScreenLayout from '~components/ScreenLayout'
import TimetableItem from '~components/TimetableItem'
import TimetableSectionHeader from '~components/TimetableSectionHeader'
import { mockedTimetableData, SubjectTimetable } from '~config/mockedTimetableData'
import { bottomOffset } from '~constants/platformSpecific'
import groupByDate from '~helpers/groupByDate'

const TimetableScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)

  const { bottom } = useSafeAreaInsets()

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.y
    setScrollOffset(offset)
  }

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  const renderItem = ({ item }: SectionListRenderItemInfo<SubjectTimetable>) => {
    return <TimetableItem item={item} />
  }

  const renderSectionHeader = ({ section: { title } }: { section: SectionListData<SubjectTimetable> }) => {
    return <TimetableSectionHeader title={title} />
  }

  return (
    <ScreenLayout heading={'Расписание'} offset={scrollOffset}>
      <SectionList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
        contentContainerStyle={{ paddingBottom: bottomOffset(bottom) }}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={groupByDate(mockedTimetableData)}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{ height: '100%' }}
        onScroll={handleScroll}
      />
    </ScreenLayout>
  )
}

export default TimetableScreen
