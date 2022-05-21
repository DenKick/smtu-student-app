import React, { useEffect } from 'react'

import styled from '@emotion/native'

import Logo from '~components/Logo'
import MenuItem from '~components/MenuItem'
import ProfileMenuItem from '~components/ProfileMenuItem'
import ScreenLayout from '~components/ScreenLayout'
import useAppSelector from '~hooks/useAppSelector'
import { useAppDispatch } from '~store/index'
import { fetchNotifications } from '~store/newsAndNotificationsSlice'
import { fetchUserInfo } from '~store/profileSlice'
import { selectUnreadNotifications } from '~store/selectors'
import { RoutesNames } from '~types/routes'

const Wrapper = styled.ScrollView`
  height: 100%;
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const LogoWrapper = styled.View`
  padding: 30px 0 40px;
`

const AccountScreen: React.FC = () => {
  const { profile } = useAppSelector(state => state.profile)
  const {
    notifications: { content },
  } = useAppSelector(state => state.newsAndNotifications)
  const unreadNotifications = useAppSelector(state => selectUnreadNotifications(state))

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!profile) {
      dispatch(fetchUserInfo())
    }

    if (!content.length) {
      dispatch(fetchNotifications())
    }
  }, [])

  return (
    <ScreenLayout heading='Профиль' offset={0}>
      <Wrapper contentContainerStyle={{ alignItems: 'center' }}>
        <LogoWrapper>
          <Logo scale={0.3} />
        </LogoWrapper>
        <ProfileMenuItem />
        <MenuItem title='Новости' route={RoutesNames.News} />
        <MenuItem title='Уведомления' route={RoutesNames.Notifications} countField={unreadNotifications.length} />
        <MenuItem title='Сообщения' route={RoutesNames.Timetable} />
      </Wrapper>
    </ScreenLayout>
  )
}

export default AccountScreen
