import React, { useMemo, useState } from 'react'
import { Platform } from 'react-native'

import styled from '@emotion/native'

import GrayText from '~components/GrayText'
import HeadingText from '~components/HeadingText'
import PerformanceModal from '~components/PerformanceModal'
import getFormattedGrade from '~helpers/getFormattedGrade'
import { ExamTypes, GradeTypes, Performance } from '~types/performance'

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
  flex-direction: row;
  align-items: center;
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
  padding: 4px 8px;
`

const InnerContainer = styled.View<{ width: string }>`
  width: ${({ width }) => width};
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
        <InnerContainer width='75%'>
          <HeadingText>{item.subject}</HeadingText>
          {grade.exam !== ExamTypes.Null && <GrayText margin='8px 0 0'>{grade.exam}</GrayText>}
        </InnerContainer>
        {grade.type !== GradeTypes.Null && (
          <InnerContainer width='22%'>
            <GradeContainer type={grade.type}>
              <Grade type={grade.type}>{grade.grade}</Grade>
            </GradeContainer>
          </InnerContainer>
        )}
      </Container>
      <PerformanceModal isVisible={isModalVisible} toggleVisible={toggleModal} item={item} />
    </>
  )
}

export default PerformanceListItem
