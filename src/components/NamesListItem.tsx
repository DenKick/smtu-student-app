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
  border-bottom-width: ${Platform.select({ ios: '1px', default: '0px' })};
  border-bottom-color: ${({ theme }) => theme.colors.border.primary};
  border-radius: ${Platform.select({ ios: '0px', default: '8px' })};
  padding: 16px 0;
  margin: ${Platform.select({ ios: '0 16px', default: '10px 16px' })};
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

interface Props {
  title: string
}

const NamesListItem: React.FC<Props> = ({ title }) => {
  const navigation = useAppNavigation()

  const handlePress = () => {
    navigation.navigate(RoutesNames.MessagesDetails, { title })
  }

  return (
    <Container onPress={handlePress}>
      <InnerContainer>
        <ProfileName>{title}</ProfileName>
      </InnerContainer>
      {Platform.select({
        ios: (
          <InnerContainer>
            <ChevronIcon />
          </InnerContainer>
        ),
        default: null,
      })}
    </Container>
  )
}

export default NamesListItem
