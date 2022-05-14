import React from 'react'
import { FlatList } from 'react-native'

import ScreenLayout from '~components/ScreenLayout'
import ZeroState from '~components/ZeroState'

const HomeworkScreen: React.FC = () => {
  const items: string[] = []
  return (
    <ScreenLayout heading={'Задания'} offset={0}>
      <FlatList
        data={items}
        bounces={items.length > 0}
        renderItem={() => null}
        ListEmptyComponent={<ZeroState title={'Нет активных заданий'} />}
      />
    </ScreenLayout>
  )
}

export default HomeworkScreen
