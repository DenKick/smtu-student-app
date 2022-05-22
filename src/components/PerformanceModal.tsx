import React from 'react'
import { Platform } from 'react-native'
import Modal from 'react-native-modal'

import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

import Button from '~components/Button'
import getFormattedGrade from '~helpers/getFormattedGrade'
import { Performance } from '~types/performance'

const ModalInnerWrapper = styled.View`
  background-color: ${({ theme }) =>
    Platform.select({
      ios: theme.colors.background.primary,
      default: theme.colors.background.secondary,
    })};
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

const Info = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.large};
  margin: 8px 0;
`

const ButtonWrapper = styled.View`
  margin-top: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
`

interface Props {
  isVisible: boolean
  toggleVisible: () => void
  item: Performance
}

const PerformanceModal: React.FC<Props> = ({ isVisible, toggleVisible, item }) => {
  const theme = useTheme()

  return (
    <Modal
      backdropColor={theme.colors.common.black}
      backdropOpacity={0.8}
      isVisible={isVisible}
      onBackdropPress={toggleVisible}
      avoidKeyboard={true}
    >
      <ModalInnerWrapper>
        <ModalHeading>{item.subject}</ModalHeading>
        <Info>Цикл: {item.cycle}</Info>
        <Info>Семестр: {item.semester}</Info>
        <Info>Лекций: {item.lecturesCount}</Info>
        <Info>Лабораторных: {item.laboratoryWorksCount}</Info>
        <Info>Практик: {item.practiceCount}</Info>
        <Info>СРС: {item.ssrCount}</Info>
        <Info>Зачётных единиц: {item.creditCount}</Info>
        <Info>Оценка: {getFormattedGrade(item).grade}</Info>
        {!!item.termPaperWork && <Info>Курсовая работа: {item.termPaperWork}</Info>}
        {!!item.termPaperProject && <Info>Курсовой проект: {item.termPaperProject}</Info>}
        <ButtonWrapper>
          <Button
            label='Закрыть'
            onPress={toggleVisible}
            background={Platform.select({
              ios: theme.colors.background.primary,
              default: theme.colors.background.secondary,
            })}
            color={theme.colors.common.warning}
          />
        </ButtonWrapper>
      </ModalInnerWrapper>
    </Modal>
  )
}

export default PerformanceModal
