import React from 'react'

import styled from '@emotion/native'

const Header = styled.Text`
  font-size: ${({ theme }) => theme.dimensions.fontSize.sectionHeading};
  padding: 40px ${({ theme }) => theme.dimensions.commonHorizontalPadding} 10px;
  color: ${({ theme }) => theme.colors.input.text};
`

interface Props {
  title: string
}

const TimetableItem: React.FC<Props> = ({ title }) => {
  return <Header>{title}</Header>
}

export default TimetableItem
