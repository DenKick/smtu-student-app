import React, { useState } from 'react'
import Modal from 'react-native-modal'

import styled from '@emotion/native'
import { useTheme } from '@emotion/react'
import { nanoid } from '@reduxjs/toolkit'

import Button from '~components/Button'
import Input from '~components/Input'
import SelectDate from '~components/SelectDate'
import { addHomework } from '~store/homeworkSlice'
import { useAppDispatch } from '~store/index'

const InputWrapper = styled.View`
  padding: 0 0 16px 0;
`

const ModalInnerWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  width: 100%;
`

const ModalHeading = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.sectionHeading};
  text-align: center;
  margin-bottom: 16px;
`

interface Props {
  subject: string
  teacher: string | null
  isVisible: boolean
  toggleVisible: () => void
}

const AddHomeworkModal: React.FC<Props> = ({ isVisible, toggleVisible, subject, teacher }) => {
  const theme = useTheme()

  const [date, setDate] = useState<Date>()
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useAppDispatch()

  const handleToggleModal = () => {
    setHeading('')
    setDescription('')
    setDate(undefined)
    toggleVisible()
  }

  const handleSetDateConfirm = (date: Date) => {
    setDate(date)
  }

  const handleAddButtonPress = () => {
    if (heading && description) {
      dispatch(
        addHomework({
          id: nanoid(),
          subject,
          teacher,
          heading,
          description,
          date: date ? date.toISOString() : null,
        }),
      )
      handleToggleModal()
    }
  }

  return (
    <Modal
      backdropColor={theme.colors.common.black}
      backdropOpacity={0.8}
      isVisible={isVisible}
      onBackdropPress={handleToggleModal}
      avoidKeyboard={true}
    >
      <ModalInnerWrapper>
        <ModalHeading>Добавить задание</ModalHeading>
        <InputWrapper>
          <Input value={heading} placeholder='Заголовок' setValue={setHeading} />
        </InputWrapper>
        <InputWrapper>
          <Input value={description} placeholder='Описание' setValue={setDescription} multiline />
        </InputWrapper>
        <SelectDate selectedDate={date} onConfirm={handleSetDateConfirm} />
        <Button label='Добавить' onPress={handleAddButtonPress} />
      </ModalInnerWrapper>
    </Modal>
  )
}

export default AddHomeworkModal
