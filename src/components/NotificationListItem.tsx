import React, { useMemo } from 'react'

import styled from '@emotion/native'

import GrayText from '~components/GrayText'
import HeadingText from '~components/HeadingText'
import useAppNavigation from '~hooks/useAppNavigation'
import useAppSelector from '~hooks/useAppSelector'
import { useAppDispatch } from '~store/index'
import { addReadNotification } from '~store/newsAndNotificationsSlice'
import { Notification } from '~types/newsAndNotifications'
import { RoutesNames } from '~types/routes'

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  margin: ${({ theme }) => `${theme.dimensions.commonHorizontalPadding} 0px`};
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  overflow: hidden;
`

const TopContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 8px;
`

const UnreadLabel = styled.View`
  background-color: ${({ theme }) => theme.colors.common.primary};
  border-radius: 3px;
  height: 6px;
  margin-right: 10px;
  width: 6px;
`

interface Props {
  item: Notification
}

const NotificationListItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch()
  const navigation = useAppNavigation()
  const { readNotifications } = useAppSelector(state => state.newsAndNotifications)
  const isReadNotification = useMemo(() => readNotifications.includes(item.id), [readNotifications])

  const handlePress = () => {
    dispatch(addReadNotification(item.id))
    navigation.navigate(RoutesNames.NotificationDetails, { id: item.id, heading: item.heading })
  }

  return (
    <Container onPress={handlePress}>
      <TopContainer>
        {!isReadNotification && <UnreadLabel />}
        <GrayText>{item.type}</GrayText>
      </TopContainer>
      <HeadingText>{item.heading}</HeadingText>
    </Container>
  )
}

export default NotificationListItem
