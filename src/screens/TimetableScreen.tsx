import React, { useEffect, useState } from 'react'
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
import { bottomOffset } from '~constants/platformSpecific'
import groupByDate from '~helpers/groupByDate'
import useAppSelector from '~hooks/useAppSelector'
import { useAppDispatch } from '~store/index'
import { fetchTimetable } from '~store/timetableSlice'
import { SubjectTimetable } from '~types/timetable'

const TimetableScreen: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0)

  const { isLoadingTimetable, timetable } = useAppSelector(state => state.timetable)

  const dispatch = useAppDispatch()
  const { bottom } = useSafeAreaInsets()

  const handleUpdateTimetable = () => {
    dispatch(fetchTimetable())
  }

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.y
    setScrollOffset(offset)
  }

  const renderItem = ({ item }: SectionListRenderItemInfo<SubjectTimetable>) => {
    return <TimetableItem item={item} />
  }

  const renderSectionHeader = ({ section: { title } }: { section: SectionListData<SubjectTimetable> }) => {
    return <TimetableSectionHeader title={title} />
  }

  useEffect(() => {
    if (!timetable.length) {
      handleUpdateTimetable()
    }
  }, [])

  return (
    <ScreenLayout heading={'Расписание'} offset={scrollOffset}>
      <SectionList
        refreshControl={<RefreshControl refreshing={isLoadingTimetable} onRefresh={handleUpdateTimetable} />}
        contentContainerStyle={{ paddingBottom: bottomOffset(bottom) }}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={groupByDate(timetable)}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{ height: '100%' }}
        onScroll={handleScroll}
      />
    </ScreenLayout>
  )
}

export default TimetableScreen
