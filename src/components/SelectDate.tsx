import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker'

import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 10px 0 26px;
`

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
`

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.common.primary};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  margin-left: 5px;
`

interface Props {
  onConfirm: (date: Date) => void
  selectedDate?: Date
}

const SelectDate: React.FC<Props> = ({ onConfirm, selectedDate }) => {
  const [date, setDate] = useState(new Date())
  const [isModalVisible, setIsModalVisible] = useState(false)

  const theme = useTheme()

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const handleSetDateConfirm = (date: Date) => {
    toggleModal()
    setDate(date)
    onConfirm(date)
  }

  return (
    <Container>
      <Text>Дата сдачи:</Text>
      {selectedDate ? (
        <TouchableOpacity onPress={toggleModal}>
          <ButtonText>{selectedDate.toLocaleDateString()}</ButtonText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={toggleModal}>
          <ButtonText>Выбрать</ButtonText>
        </TouchableOpacity>
      )}
      <DatePicker
        modal
        mode='date'
        date={date}
        open={isModalVisible}
        onConfirm={handleSetDateConfirm}
        onCancel={toggleModal}
        textColor={theme.colors.input.text}
      />
    </Container>
  )
}

export default SelectDate
