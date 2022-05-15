import React from 'react'
import { ActivityIndicator } from 'react-native'
import FastImage from 'react-native-fast-image'

import styled from '@emotion/native'

import useAppNavigation from '~hooks/useAppNavigation'
import useAppSelector from '~hooks/useAppSelector'
import ChevronIcon from '~icons/Chevron'
import { RoutesNames } from '~types/routes'

const ProfileWrapper = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border.primary};
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ActivityWrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

const InnerContainer = styled.View`
  align-items: center;
  flex-direction: row;
`

const Image = styled(FastImage)`
  border-radius: 15px;
  height: 30px;
  width: 30px;
`

const ProfileName = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  margin-left: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const ProfileMenuItem: React.FC = () => {
  const { profile, isLoadingProfile } = useAppSelector(state => state.profile)

  const navigation = useAppNavigation()

  const handlePress = () => {
    if (profile) {
      navigation.navigate(RoutesNames.ProfileDetails)
    }
  }

  return (
    <ProfileWrapper onPress={handlePress}>
      {profile && !isLoadingProfile ? (
        <>
          <InnerContainer>
            <Image source={{ uri: profile.photo }} />
            <ProfileName>{profile.name}</ProfileName>
          </InnerContainer>
          <InnerContainer>
            <ChevronIcon />
          </InnerContainer>
        </>
      ) : (
        <ActivityWrapper>
          <ActivityIndicator style={{ alignSelf: 'center' }} size={30} />
        </ActivityWrapper>
      )}
    </ProfileWrapper>
  )
}

export default ProfileMenuItem
