import React, { useState } from 'react'
import { ListRenderItemInfo, NativeScrollEvent, NativeSyntheticEvent, SectionList, SectionListData } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styled from '@emotion/native'

import HomeworkListItem from '~components/HomeworkListItem'
import ScreenLayout from '~components/ScreenLayout'
import TimetableSectionHeader from '~components/TimetableSectionHeader'
import ZeroState from '~components/ZeroState'
import { bottomOffset } from '~constants/platformSpecific'
import groupBySubject from '~helpers/groupBySubject'
import useAppSelector from '~hooks/useAppSelector'
import { Homework } from '~types/homework'

const ListItemWrapper = styled.View`
  padding: ${({ theme }) => `0px ${theme.dimensions.commonHorizontalPadding}`};
`

const renderItem = ({ item }: ListRenderItemInfo<Homework>) => (
  <ListItemWrapper>
    <HomeworkListItem item={item} />
  </ListItemWrapper>
)

const renderSectionHeader = ({ section: { title } }: { section: SectionListData<Homework> }) => {
  return <TimetableSectionHeader title={title} />
}

const HomeworkScreen: React.FC = () => {
  const { bottom } = useSafeAreaInsets()
  const [scrollOffset, setScrollOffset] = useState(0)

  const { homeworks } = useAppSelector(state => state.homework)

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.y
    setScrollOffset(offset)
  }

  return (
    <ScreenLayout heading={'Задания'} offset={scrollOffset}>
      <SectionList
        contentContainerStyle={{ flexGrow: 1, paddingBottom: bottomOffset(bottom) }}
        onScroll={handleScroll}
        sections={groupBySubject(homeworks)}
        bounces={homeworks.length > 0}
        stickySectionHeadersEnabled={false}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ZeroState title={'Нет активных заданий'} />}
      />
    </ScreenLayout>
  )
}

export default HomeworkScreen
