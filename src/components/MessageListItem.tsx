import React from 'react'

import styled from '@emotion/native'

import GrayText from '~components/GrayText'
import getFormattedTimeString from '~helpers/getFormattedTimeString'
import useAppSelector from '~hooks/useAppSelector'
import { Message } from '~types/messages'

const Container = styled.View<{ isUserMessage: boolean }>`
  background-color: ${({ theme, isUserMessage }) =>
    isUserMessage ? theme.colors.button.backgroundPrimary : theme.colors.background.secondary};
  align-self: ${({ isUserMessage }) => (isUserMessage ? 'flex-end' : 'flex-start')};
  border-radius: ${({ isUserMessage, theme }) =>
    isUserMessage
      ? `${theme.dimensions.commonHorizontalPadding} 0 0 ${theme.dimensions.commonHorizontalPadding}`
      : `0 ${theme.dimensions.commonHorizontalPadding} ${theme.dimensions.commonHorizontalPadding} 0`};
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding} 0;
  max-width: 70%;
`

const MessageText = styled.Text<{ isUserMessage: boolean }>`
  color: ${({ theme, isUserMessage }) => (isUserMessage ? theme.colors.button.textColor : theme.colors.input.text)};
`

const DateContainer = styled.View<{ isUserMessage: boolean }>`
  align-self: ${({ isUserMessage }) => (isUserMessage ? 'flex-end' : 'flex-start')};
  margin-left: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  margin-right: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

interface Props {
  message: Message
}

const MessageListItem: React.FC<Props> = ({ message }) => {
  const profile = useAppSelector(state => state.profile.profile)

  return (
    <>
      <Container isUserMessage={message.from === profile?.name}>
        <MessageText isUserMessage={message.from === profile?.name}>{message.message}</MessageText>
      </Container>
      <DateContainer isUserMessage={message.from === profile?.name}>
        <GrayText>{getFormattedTimeString(message.date)}</GrayText>
      </DateContainer>
    </>
  )
}

export default MessageListItem
