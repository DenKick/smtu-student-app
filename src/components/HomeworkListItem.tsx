import React, { useState } from 'react'
import { Platform } from 'react-native'

import styled from '@emotion/native'

import HomeworkModal from '~components/HomeworkModal'
import getFormattedDescriptionText from '~helpers/getFormattedDescriptionText'
import { Homework } from '~types/homework'

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => Platform.select({ ios: theme.dimensions.borderRadius, default: '0px' })};
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding} 0px;
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  overflow: hidden;
`

const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.sectionHeading};
`

const GrayText = styled.Text`
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  color: ${({ theme }) => theme.colors.input.placeholder};
  margin: 8px 0;
`

interface Props {
  item: Homework
}

const HomeworkListItem: React.FC<Props> = ({ item }) => {
  const date = item.date ? new Date(item.date) : null

  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <Container onPress={toggleModalVisibility}>
      <Heading>{item.heading}</Heading>
      <GrayText numberOfLines={1}>{getFormattedDescriptionText(item.description)}</GrayText>
      {!!item.date && <GrayText>Дата сдачи: {date?.toLocaleDateString()}</GrayText>}
      <HomeworkModal isVisible={isModalVisible} onBackdropPress={toggleModalVisibility} item={item} />
    </Container>
  )
}

export default HomeworkListItem
