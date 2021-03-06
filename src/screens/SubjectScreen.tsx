import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styled from '@emotion/native'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

import AddHomeworkModal from '~components/AddHomeworkModal'
import Button from '~components/Button'
import HomeworkListItem from '~components/HomeworkListItem'
import ScreenLayout from '~components/ScreenLayout'
import ZeroState from '~components/ZeroState'
import { bottomOffset } from '~constants/platformSpecific'
import useAppSelector from '~hooks/useAppSelector'
import { selectHomeworksBySubject } from '~store/selectors'
import { Homework } from '~types/homework'
import { RoutesNames, StackRouteParams } from '~types/routes'

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

const ButtonWrapper = styled.View`
  padding: ${({ theme }) => `${theme.dimensions.commonHorizontalPadding} 0px`};
`

const Teacher = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  padding: ${({ theme }) => `${theme.dimensions.commonHorizontalPadding} 0`};
`

const renderItem = ({ item }: ListRenderItemInfo<Homework>) => <HomeworkListItem item={item} />

const SubjectScreen: React.FC<StackScreenProps<StackRouteParams, RoutesNames.Subject>> = ({
  route: {
    params: { title, teacher },
  },
}) => {
  const navigation = useNavigation()
  const { top } = useSafeAreaInsets()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const homeworks = useAppSelector(state => selectHomeworksBySubject(state, title))

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
          {!!teacher && <Teacher>??????????????????????????: {teacher}</Teacher>}
          <FlatList
            contentContainerStyle={{ flexGrow: 1, paddingBottom: bottomOffset(200) }}
            data={homeworks}
            renderItem={renderItem}
            bounces={homeworks.length > 0}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<ZeroState title={'?????? ???????????????? ??????????????'} />}
            ListFooterComponent={
              <ButtonWrapper>
                <Button label='???????????????? ??????????????' onPress={toggleModal} />
              </ButtonWrapper>
            }
          />
          <AddHomeworkModal subject={title} teacher={teacher} isVisible={isModalVisible} toggleVisible={toggleModal} />
        </Wrapper>
      </ScreenLayout>
    </>
  )
}

export default SubjectScreen
