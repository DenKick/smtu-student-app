import React from 'react'
import FastImage from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styled from '@emotion/native'

import ScreenLayout from '~components/ScreenLayout'
import useAppSelector from '~hooks/useAppSelector'
import { clearStore, useAppDispatch } from '~store/index'

const Wrapper = styled.View`
  height: 85%;
  width: 100%;
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const Image = styled(FastImage)`
  border-radius: 40px;
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding} auto;
  height: 80px;
  width: 80px;
`

const RowItem = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border.primary};
  flex-direction: row;
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding} 0px;
`

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  margin: 0 5px 0 0;
`

const LogoutButton = styled.TouchableOpacity`
  margin: auto 0 0 0;
`

const LogoutText = styled.Text`
  color: ${({ theme }) => theme.colors.common.warning};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  text-align: center;
`

const ProfileDetailsScreen: React.FC = () => {
  const { profile } = useAppSelector(state => state.profile)

  const dispatch = useAppDispatch()
  const { bottom } = useSafeAreaInsets()

  const handleLogoutPress = () => {
    clearStore(dispatch)
  }

  return (
    <ScreenLayout heading='Профиль' offset={bottom} withHandleComponent>
      {profile && (
        <Wrapper>
          <Image source={{ uri: profile.photo }} />
          <RowItem>
            <Text>Имя:</Text>
            <Text>{profile.name}</Text>
          </RowItem>
          <RowItem>
            <Text>Почта:</Text>
            <Text>{profile.email}</Text>
          </RowItem>
          <RowItem>
            <Text>Группа:</Text>
            <Text>{profile.group}</Text>
          </RowItem>
          <RowItem>
            <Text>Дата рождения:</Text>
            <Text>{profile.birthdate}</Text>
          </RowItem>
          <RowItem>
            <Text>Номер телефона:</Text>
            <Text>{profile.phone}</Text>
          </RowItem>
          <LogoutButton onPress={handleLogoutPress}>
            <LogoutText>Выйти</LogoutText>
          </LogoutButton>
        </Wrapper>
      )}
    </ScreenLayout>
  )
}

export default ProfileDetailsScreen
