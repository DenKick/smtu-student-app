import React, { useEffect, useState } from 'react'
import { FlatList, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styled from '@emotion/native'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

import AddButton from '~components/AddButton'
import AddHomeworkModal from '~components/AddHomeworkModal'
import ScreenLayout from '~components/ScreenLayout'
import ZeroState from '~components/ZeroState'
import { RoutesNames, TimetableStackRouteParams } from '~types/routes'

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const ButtonWrapper = styled.View<{ bottomOffset: number }>`
  position: absolute;
  right: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  bottom: ${({ bottomOffset }) => `${Platform.select({ ios: bottomOffset, default: 16 })}px`};
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
  const navigation = useNavigation()
  const { top, bottom } = useSafeAreaInsets()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const items: string[] = []

  useEffect(() => {
    navigation.setOptions({
      title,
    })
  }, [])

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <>
      <ScreenLayout heading={title} offset={top} withHandleComponent>
        <Wrapper>
          {!!teacher && <Teacher>Преподаватель: {teacher}</Teacher>}
          <FlatList
            data={items}
            renderItem={() => null}
            bounces={items.length > 0}
            ListEmptyComponent={<ZeroState title={'Нет активных заданий'} />}
          />
          <AddHomeworkModal isVisible={isModalVisible} toggleVisible={toggleModal} />
        </Wrapper>
      </ScreenLayout>
      <ButtonWrapper bottomOffset={bottom}>
        <AddButton onPress={toggleModal} />
      </ButtonWrapper>
    </>
  )
}

export default SubjectScreen
