import React from 'react'
import { Platform } from 'react-native'

import styled from '@emotion/native'

import Heading from '~components/PageHeading'

const Wrapper = styled.ScrollView``

interface Props {
  heading: string
}

const PageLayout: React.FC<Props> = ({ children, heading }) => {
  return (
    <Wrapper>
      {Platform.OS === 'ios' && <Heading title={heading} />}
      {children}
    </Wrapper>
  )
}

export default PageLayout
