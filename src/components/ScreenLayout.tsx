import React from 'react'
import { Platform } from 'react-native'

import styled from '@emotion/native'

import Heading from '~components/ScreenHeading'

const Wrapper = styled.View``

interface Props {
  heading: string
  offset: number
  withHandleComponent?: boolean
}

const ScreenLayout: React.FC<Props> = ({ children, heading, offset, withHandleComponent }) => {
  return (
    <Wrapper>
      {Platform.select({
        ios: <Heading title={heading} offset={offset} withHandleComponent={withHandleComponent} />,
        default: null,
      })}
      {children}
    </Wrapper>
  )
}

export default ScreenLayout
