import React from 'react'
import Svg, { Rect, Circle, ClipPath, Defs, G, Path } from 'react-native-svg'

import { useTheme } from '@emotion/react'

interface Props {
  isActive?: boolean
}

const PerformanceIcon: React.FC<Props> = ({ isActive }) => {
  const theme = useTheme()

  const color = isActive ? theme.colors.icons.active : theme.colors.icons.inactive

  return (
    <Svg width={24} height={24} preserveAspectRatio='xMinYMin slice' viewBox='0 0 216 216' fill='none'>
      <G clipPath='url(#a)' stroke={color} strokeWidth={17}>
        <Circle cx={108.5} cy={98.5} r={40} />
        <Rect x={8.671} y={28.5} width={199} height={182} rx={17.5} />
        <Path strokeLinecap='round' d='M82.5 128.5v58' />
        <Path transform='matrix(0 1 1 0 143 120)' strokeLinecap='round' d='M8.5-8.5h58' />
        <Path transform='matrix(.92123 -.38901 .41033 .91194 78.129 198)' strokeLinecap='round' d='M8.5-8.5h26.7' />
        <Path transform='matrix(-.92123 -.38901 -.41033 .91194 138 198)' strokeLinecap='round' d='M8.5-8.5h26.7' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill={color} d='M0 0h216v216H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PerformanceIcon
