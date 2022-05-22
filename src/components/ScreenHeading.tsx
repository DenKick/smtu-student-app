import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Animated, Dimensions, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styled from '@emotion/native'

import { animationTiming } from '~constants/platformSpecific'
import useAppNavigation from '~hooks/useAppNavigation'

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

const HeadingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const BackButton = styled.Text`
  font-size: ${({ theme }) => theme.dimensions.fontSize.sectionHeading};
  color: ${({ theme }) => theme.colors.common.primary};
`

export interface Props {
  title: string
  offset: number
  withHandleComponent?: boolean
  withBackButton?: boolean
}

enum HeaderState {
  Collapsed = 'collapsed',
  Expanded = 'expanded',
}

const { height } = Dimensions.get('window')

const ScreenHeading: React.FC<Props> = ({ title, offset, withHandleComponent, withBackButton }) => {
  const { top } = useSafeAreaInsets()
  const navigation = useAppNavigation()
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

  const handleBackPress = () => {
    navigation.goBack()
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
      <HeadingContainer>
        <Title>{title}</Title>
        {withBackButton && (
          <TouchableOpacity onPress={handleBackPress}>
            <BackButton>Назад</BackButton>
          </TouchableOpacity>
        )}
      </HeadingContainer>
    </Wrapper>
  )
}

export default ScreenHeading
