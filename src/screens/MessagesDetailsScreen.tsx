import React, { useMemo, useState } from 'react'
import { FlatList, InputAccessoryView, KeyboardAvoidingView, Platform } from 'react-native'

import styled from '@emotion/native'
import { StackScreenProps } from '@react-navigation/stack'

import Input from '~components/Input'
import MessageListItem from '~components/MessageListItem'
import ScreenLayout from '~components/ScreenLayout'
import ZeroState from '~components/ZeroState'
import { keyboardAvoidingViewBehavior } from '~constants/platformSpecific'
import useAppSelector from '~hooks/useAppSelector'
import { RoutesNames, StackRouteParams } from '~types/routes'

const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 8px ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const MessagesDetailsScreen: React.FC<StackScreenProps<StackRouteParams, RoutesNames.MessagesDetails>> = ({
  route: {
    params: { title },
  },
}) => {
  const [message, setMessage] = useState('')
  const { messages } = useAppSelector(state => state.messages)

  const personalMessages = useMemo(() => messages.filter(m => m.from === title || m.to === title), [messages])

  return (
    <ScreenLayout heading={title} offset={0} withHandleComponent>
      <KeyboardAvoidingView
        behavior={keyboardAvoidingViewBehavior}
        keyboardVerticalOffset={Platform.select({ ios: 60, default: 110 })}
      >
        <FlatList
          inverted
          style={{ height: Platform.select({ ios: '100%', default: '90%' }) }}
          contentContainerStyle={{ flexDirection: 'column-reverse' }}
          data={personalMessages}
          renderItem={({ item }) => <MessageListItem message={item} />}
          ListEmptyComponent={<ZeroState title='Нет личных сообщений' />}
          showsVerticalScrollIndicator={false}
        />
        {Platform.select({
          ios: (
            <InputAccessoryView>
              <InputContainer>
                <Input value={message} placeholder='Сообщение' setValue={setMessage} />
              </InputContainer>
            </InputAccessoryView>
          ),
          default: (
            <InputContainer>
              <Input value={message} placeholder='Сообщение' setValue={setMessage} />
            </InputContainer>
          ),
        })}
      </KeyboardAvoidingView>
    </ScreenLayout>
  )
}

export default MessagesDetailsScreen
