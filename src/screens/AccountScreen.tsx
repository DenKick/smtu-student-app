import React, { useEffect } from 'react'

import styled from '@emotion/native'

import Logo from '~components/Logo'
import ProfileMenuItem from '~components/ProfileMenuItem'
import ScreenLayout from '~components/ScreenLayout'
import MenuItem from '~icons/MenuItem'
import { useAppDispatch } from '~store/index'
import { fetchUserInfo } from '~store/profileSlice'
import { RoutesNames } from '~types/routes'

const Wrapper = styled.ScrollView`
  height: 100%;
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const LogoWrapper = styled.View`
  padding: 30px 0 40px;
`

const AccountScreen: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [])

  return (
    <ScreenLayout heading={'Профиль'} offset={0}>
      <Wrapper contentContainerStyle={{ alignItems: 'center' }}>
        <LogoWrapper>
          <Logo scale={0.3} />
        </LogoWrapper>
        <ProfileMenuItem />
        <MenuItem title='Новости' route={RoutesNames.Timetable} />
        <MenuItem title='Уведомления' route={RoutesNames.Timetable} />
        <MenuItem title='Сообщения' route={RoutesNames.Timetable} />
      </Wrapper>
    </ScreenLayout>
  )
}

export default AccountScreen
