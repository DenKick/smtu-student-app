import React, { useMemo, useState } from 'react'
import { Platform } from 'react-native'

import styled from '@emotion/native'

import HeadingText from '~components/HeadingText'
import PerformanceModal from '~components/PerformanceModal'
import getFormattedGrade from '~helpers/getFormattedGrade'
import { GradeTypes, Performance } from '~types/performance'

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) =>
    Platform.select({
      ios: theme.colors.background.secondary,
      default: theme.colors.background.secondary,
    })};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  padding: ${({ theme }) =>
    Platform.select({
      ios: `${theme.dimensions.commonHorizontalPadding}`,
      default: theme.dimensions.commonHorizontalPadding,
    })};
  margin: ${({ theme }) => `${theme.dimensions.commonHorizontalPadding} 0px`};
`

const Grade = styled.Text<{ type: GradeTypes }>`
  color: ${({ theme, type }) =>
    type === GradeTypes.Positive ? theme.colors.common.onAccent : theme.colors.common.onWarningBackground};
`

const GradeContainer = styled.View<{ type: GradeTypes }>`
  align-self: flex-end;
  background-color: ${({ theme, type }) =>
    type === GradeTypes.Positive ? theme.colors.common.accent : theme.colors.common.warningBackground};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  margin-top: 8px;
  padding: 4px 8px;
`

interface Props {
  item: Performance
}

const PerformanceListItem: React.FC<Props> = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const grade = useMemo(() => getFormattedGrade(item), [item])

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <>
      <Container onPress={toggleModal}>
        <HeadingText>{item.subject}</HeadingText>
        {grade.type !== GradeTypes.Null && (
          <GradeContainer type={grade.type}>
            <Grade type={grade.type}>{grade.grade}</Grade>
          </GradeContainer>
        )}
      </Container>
      <PerformanceModal isVisible={isModalVisible} toggleVisible={toggleModal} item={item} />
    </>
  )
}

export default PerformanceListItem
