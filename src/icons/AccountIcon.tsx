import React from 'react'
import Svg, { Rect, Circle, ClipPath, Defs, G, Path } from 'react-native-svg'

import { useTheme } from '@emotion/react'

interface Props {
  isActive?: boolean
}

const AccountIcon: React.FC<Props> = ({ isActive }) => {
  const theme = useTheme()

  const color = isActive ? theme.colors.icons.active : theme.colors.icons.inactive

  return (
    <Svg width={24} height={24} preserveAspectRatio='xMinYMin slice' viewBox='0 0 216 216' fill='none'>
      <G clipPath='url(#a)'>
        <Circle cx={108} cy={200} r={70} fill={color} />
        <Circle cx={108} cy={95} r={35} fill={color} />
        <Rect x={8.671} y={28.5} width={199} height={182} rx={17.5} stroke={color} strokeWidth={17} />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill={color} d='M0 0h216v216H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AccountIcon
