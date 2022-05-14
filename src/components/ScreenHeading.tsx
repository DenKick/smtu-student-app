import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Animated, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styled from '@emotion/native'

import { animationTiming } from '~constants/platformSpecific'

const Wrapper = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-bottom-color: ${({ theme }) => theme.colors.border.primary};
  border-bottom-width: 1px;
  padding: ${({ theme }) =>
    `0px ${theme.dimensions.commonHorizontalPadding} ${theme.dimensions.commonHorizontalPadding}`};
`

const HandleComponent = styled.View`
  background-color: ${({ theme }) => theme.colors.handleComponent};
  border-radius: 20px;
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-15px);
  height: 4px;
  width: 60px;
`

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.input.text};
  font-size: ${({ theme }) => theme.dimensions.fontSize.sectionHeading};
  line-height: 22px;
`

export interface Props {
  title: string
  offset: number
  withHandleComponent?: boolean
}

enum HeaderState {
  Collapsed = 'collapsed',
  Expanded = 'expanded',
}

const { height } = Dimensions.get('window')

const ScreenHeading: React.FC<Props> = ({ title, offset, withHandleComponent }) => {
  const { top } = useSafeAreaInsets()
  const [headerState, setHeaderState] = useState(HeaderState.Expanded)

  const paddingTop = useMemo(() => {
    return height * 0.05 + top
  }, [top, height])

  const paddingAnim = useRef(new Animated.Value(paddingTop)).current

  const handleAnimation = (newValue: number) => {
    Animated.timing(paddingAnim, {
      toValue: newValue,
      duration: animationTiming,
      useNativeDriver: false,
    }).start()
  }

  useEffect(() => {
    if (headerState === HeaderState.Expanded && offset > 30) {
      handleAnimation(top)
      setHeaderState(HeaderState.Collapsed)
    } else if (headerState === HeaderState.Collapsed && offset < 30) {
      handleAnimation(paddingTop)
      setHeaderState(HeaderState.Expanded)
    }
  }, [offset])

  return (
    <Wrapper style={{ paddingTop: paddingAnim }}>
      {withHandleComponent && <HandleComponent />}
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default ScreenHeading
