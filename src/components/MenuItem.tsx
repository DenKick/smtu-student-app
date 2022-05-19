import React from 'react'
import { Platform } from 'react-native'

import styled from '@emotion/native'

import useAppNavigation from '~hooks/useAppNavigation'
import ChevronIcon from '~icons/Chevron'
import { RoutesNames } from '~types/routes'

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) =>
    Platform.select({
      ios: theme.colors.background.primary,
      default: theme.colors.background.secondary,
    })};
  width: 100%;
  border-bottom-width: ${Platform.select({ ios: '1px', default: '0px' })};
  border-bottom-color: ${({ theme }) => theme.colors.border.primary};
  border-radius: ${Platform.select({ ios: '0px', default: '8px' })};
  padding: 16px 0;
  margin: ${Platform.select({ ios: '0px', default: '10px' })};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const InnerContainer = styled.View`
  align-items: center;
  flex-direction: row;
`

const ProfileName = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  margin-left: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const LabelContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.button.backgroundPrimary};
  border-radius: 15px;
  height: 20px;
  width: 20px;
  margin-right: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const LabelText = styled.Text`
  font-size: ${({ theme }) => theme.dimensions.fontSize.normal};
  color: ${({ theme }) => theme.colors.button.textColor};
`

interface Props {
  title: string
  route: RoutesNames
  countField?: number
}

const MenuItem: React.FC<Props> = ({ title, route, countField }) => {
  const navigation = useAppNavigation()

  const handlePress = () => {
    navigation.navigate(route)
  }

  return (
    <Container onPress={handlePress}>
      <InnerContainer>
        <ProfileName>{title}</ProfileName>
      </InnerContainer>
      {Platform.select({
        ios: (
          <InnerContainer>
            {!!countField && (
              <LabelContainer>
                <LabelText>{countField}</LabelText>
              </LabelContainer>
            )}
            <ChevronIcon />
          </InnerContainer>
        ),
        default: (
          <InnerContainer>
            {!!countField && (
              <LabelContainer>
                <LabelText>{countField}</LabelText>
              </LabelContainer>
            )}
          </InnerContainer>
        ),
      })}
    </Container>
  )
}

export default MenuItem
