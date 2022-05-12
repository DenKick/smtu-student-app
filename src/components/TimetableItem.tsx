import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'

import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

import { SubjectTimetable } from '~config/mockedTimetableData'
import getFormattedTimeString from '~helpers/getFormattedTimeString'
import useAppNavigation from '~hooks/useAppNavigation'
import { RoutesNames } from '~types/routes'

const RowContainer = styled.View`
  background-color: ${({ theme }) =>
    Platform.select({ ios: theme.colors.background.primary, default: theme.colors.background.secondary })};
  padding: ${({ theme }) => theme.dimensions.commonHorizontalPadding};
  flex-direction: row;
  justify-content: space-between;
`

const ColumnContainer = styled.View<{ width: string }>`
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }) => width};
`

const Border = styled.View`
  background-color: ${({ theme }) =>
    Platform.select({ ios: theme.colors.border.primary, default: theme.colors.border.secondary })};
  width: 1px;
  height: 100%;
`

const Text = styled.Text<{ color?: string; fontSize?: string; withoutPadding?: boolean }>`
  color: ${({ color, theme }) => (color ? color : theme.colors.input.text)};
  font-size: ${({ fontSize, theme }) => (fontSize ? fontSize : theme.dimensions.fontSize.normal)};
  line-height: 22px;
  padding: ${({ withoutPadding }) => (withoutPadding ? '0 0 10px' : '10px 0 20px')};
`

const Teacher = styled(Text)`
  padding: 0;
`

interface Props {
  item: SubjectTimetable
}

const TimetableItem: React.FC<Props> = ({ item }) => {
  const theme = useTheme()
  const navigation = useAppNavigation()

  const handlePress = () => {
    navigation.navigate(RoutesNames.Subject, { title: item.subject, teacher: item.teacher })
  }

  return (
    <RowContainer>
      <ColumnContainer width={'26%'}>
        <Text fontSize={theme.dimensions.fontSize.large}>
          {getFormattedTimeString(item.timeStart)} - {getFormattedTimeString(item.timeEnd)}
        </Text>
        <Text withoutPadding color={theme.colors.input.placeholder}>
          {item.classroom}
        </Text>
      </ColumnContainer>
      <Border />
      <ColumnContainer width={'65%'}>
        <TouchableOpacity onPress={handlePress}>
          <Text fontSize={theme.dimensions.fontSize.large} color={theme.colors.common.primary}>
            {item.subject}
          </Text>
        </TouchableOpacity>
        {!!item.teacher && <Teacher withoutPadding>{item.teacher}</Teacher>}
        <Text withoutPadding color={theme.colors.input.placeholder}>
          {item.type}
        </Text>
      </ColumnContainer>
    </RowContainer>
  )
}

export default TimetableItem
