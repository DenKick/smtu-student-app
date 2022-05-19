import React from 'react'

import styled from '@emotion/native'
import { StackScreenProps } from '@react-navigation/stack'

import GrayText from '~components/GrayText'
import ScreenLayout from '~components/ScreenLayout'
import { bottomOffset, IOSTabBarHeight } from '~constants/platformSpecific'
import useAppSelector from '~hooks/useAppSelector'
import { selectNotificationById } from '~store/selectors'
import { RoutesNames, StackRouteParams } from '~types/routes'

const Wrapper = styled.ScrollView`
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const AdditionalFieldWrapper = styled.View`
  flex-direction: row;
`

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.extraLarge};
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding} 0px;
`

const NotificationDetailsScreen: React.FC<StackScreenProps<StackRouteParams, RoutesNames.NotificationDetails>> = ({
  route: {
    params: { id, heading },
  },
}) => {
  const notification = useAppSelector(state => selectNotificationById(state, id))

  return (
    <ScreenLayout heading={heading} offset={IOSTabBarHeight} withHandleComponent>
      <Wrapper
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomOffset(IOSTabBarHeight), flexGrow: 1 }}
      >
        {notification && (
          <>
            <GrayText>{notification.type}</GrayText>
            <Text>{notification.description}</Text>
            {notification.additionalFields &&
              notification.additionalFields.map(item => (
                <AdditionalFieldWrapper key={`additionalField-${item.fieldName}-${item.fieldValue}`}>
                  <GrayText>{item.fieldName}: </GrayText>
                  <GrayText>{item.fieldValue}</GrayText>
                </AdditionalFieldWrapper>
              ))}
          </>
        )}
      </Wrapper>
    </ScreenLayout>
  )
}

export default NotificationDetailsScreen
