import React from 'react'
import { FlatList } from 'react-native'

import NamesListItem from '~components/NamesListItem'
import ScreenLayout from '~components/ScreenLayout'
import ZeroState from '~components/ZeroState'
import useAppSelector from '~hooks/useAppSelector'
import { useAppDispatch } from '~store/index'
import { fetchMessages } from '~store/messagesSlice'
import { selectMessagesNames } from '~store/selectors'

const MessagesScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const names = useAppSelector(state => selectMessagesNames(state))
  const { isLoading } = useAppSelector(state => state.messages)

  const handleRefresh = () => {
    dispatch(fetchMessages())
  }

  return (
    <ScreenLayout heading='Сообщения' offset={0} withBackButton>
      <FlatList
        style={{ height: '90%' }}
        contentContainerStyle={{ flexGrow: 1, paddingTop: 16 }}
        data={names}
        renderItem={({ item }) => <NamesListItem title={item} />}
        refreshing={isLoading}
        onRefresh={handleRefresh}
        ListEmptyComponent={<ZeroState title='Нет личных сообщений' />}
      />
    </ScreenLayout>
  )
}

export default MessagesScreen
