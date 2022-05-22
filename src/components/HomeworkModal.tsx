import React from 'react'
import { Platform, ScrollView } from 'react-native'
import Modal from 'react-native-modal'

import styled from '@emotion/native'
import { useTheme } from '@emotion/react'
import Clipboard from '@react-native-clipboard/clipboard'

import GrayText from '~components/GrayText'
import HeadingText from '~components/HeadingText'
import { removeHomework } from '~store/homeworkSlice'
import { useAppDispatch } from '~store/index'
import { Homework } from '~types/homework'

const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  padding: ${({ theme }) => Platform.select({ ios: theme.dimensions.commonHorizontalPadding, default: '20px' })};
`

const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  line-height: 22px;
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding} 0;
`

const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`

const Button = styled.TouchableOpacity`
  width: 30%;
`

const ButtonText = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding} 0 0;
  text-align: center;
`

interface Props {
  isVisible: boolean
  onBackdropPress: () => void
  item: Homework
}

const HomeworkModal: React.FC<Props> = ({ isVisible, onBackdropPress, item }) => {
  const date = item.date ? new Date(item.date) : null

  const theme = useTheme()
  const dispatch = useAppDispatch()

  const handleCopyText = () => {
    Clipboard.setString(
      `${item.heading}\n${date ? `Дата сдачи: ${date?.toLocaleDateString()}\n\n` : `\n`}${item.description}\n\n${
        item.teacher ? `Преподаватель: ${item.teacher}` : ``
      }`,
    )
  }

  const handleDeleteHomework = () => {
    onBackdropPress()
    dispatch(removeHomework(item))
  }

  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <ModalContainer>
        <HeadingText>{item.heading}</HeadingText>
        {!!item.date && <GrayText margin={'8px 0'}>Дата сдачи: {date?.toLocaleDateString()}</GrayText>}
        <ScrollView style={{ maxHeight: 200 }}>
          <DescriptionText>{item.description}</DescriptionText>
        </ScrollView>
        {!!item.teacher && <GrayText margin={'8px 0'}>Преподаватель: {item.teacher}</GrayText>}
        <ButtonsWrapper>
          <Button onPress={handleDeleteHomework}>
            <ButtonText color={theme.colors.common.warning}>Удалить</ButtonText>
          </Button>
          <Button onPress={handleCopyText}>
            <ButtonText color={theme.colors.common.primary}>Скопировать</ButtonText>
          </Button>
        </ButtonsWrapper>
      </ModalContainer>
    </Modal>
  )
}

export default HomeworkModal
