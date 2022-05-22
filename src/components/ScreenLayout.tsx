import React from 'react'
import { Platform } from 'react-native'

import styled from '@emotion/native'

import Heading from '~components/ScreenHeading'

const Wrapper = styled.View`
  flex: 1;
`

interface Props {
  heading: string
  offset: number
  withHandleComponent?: boolean
  withBackButton?: boolean
}

const ScreenLayout: React.FC<Props> = ({ children, heading, offset, withHandleComponent, withBackButton }) => {
  return (
    <Wrapper>
      {Platform.select({
        ios: (
          <Heading
            title={heading}
            offset={offset}
            withHandleComponent={withHandleComponent}
            withBackButton={withBackButton}
          />
        ),
        default: null,
      })}
      {children}
    </Wrapper>
  )
}

export default ScreenLayout
