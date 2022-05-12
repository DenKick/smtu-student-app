import React, { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styled from '@emotion/native'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

import ScreenLayout from '~components/ScreenLayout'
import { RoutesNames, TimetableStackRouteParams } from '~types/routes'

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const Teacher = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.normal};
`

const SubjectScreen: React.FC<StackScreenProps<TimetableStackRouteParams, RoutesNames.Subject>> = ({
  route: {
    params: { title, teacher },
  },
}) => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title,
    })
  }, [])

  return (
    <ScreenLayout heading={title} offset={top} withHandleComponent>
      <Wrapper>{!!teacher && <Teacher>Преподаватель: {teacher}</Teacher>}</Wrapper>
    </ScreenLayout>
  )
}

export default SubjectScreen
