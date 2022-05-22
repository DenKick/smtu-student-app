import React, { useState } from 'react'

import styled from '@emotion/native'

import GrayText from '~components/GrayText'
import HeadingText from '~components/HeadingText'
import HomeworkModal from '~components/HomeworkModal'
import getFormattedDescriptionText from '~helpers/getFormattedDescriptionText'
import { Homework } from '~types/homework'

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  margin: ${({ theme }) => theme.dimensions.commonHorizontalPadding} 0px;
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  overflow: hidden;
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
      <HeadingText>{item.heading}</HeadingText>
      <GrayText numberOfLines={1} margin={'8px 0'}>
        {getFormattedDescriptionText(item.description)}
      </GrayText>
      {!!item.date && <GrayText>Дата сдачи: {date?.toLocaleDateString()}</GrayText>}
      <HomeworkModal isVisible={isModalVisible} onBackdropPress={toggleModalVisibility} item={item} />
    </Container>
  )
}

export default HomeworkListItem
