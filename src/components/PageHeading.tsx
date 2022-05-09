import React, { useMemo } from 'react'
import { Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styled from '@emotion/native'

const Wrapper = styled.View<{ paddingTop: number }>`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-bottom-color: ${({ theme }) => theme.colors.border.primary};
  border-bottom-width: 1px;
  padding: ${({ paddingTop, theme }) =>
    `${paddingTop}px ${theme.dimensions.commonHorizontalPadding} ${theme.dimensions.commonHorizontalPadding}`};
`

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: 17px;
  line-height: 22px;
`

export interface Props {
  title: string
}

const { height } = Dimensions.get('window')

const PageHeading: React.FC<Props> = ({ title }) => {
  const { top } = useSafeAreaInsets()

  const paddingTop = useMemo(() => {
    return height * 0.05 + top
  }, [top, height])

  return (
    <Wrapper paddingTop={paddingTop}>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default PageHeading
