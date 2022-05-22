import React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

import { useTheme } from '@emotion/react'

interface Props {
  isActive?: boolean
}

const TimetableIcon: React.FC<Props> = ({ isActive }) => {
  const theme = useTheme()

  const color = isActive ? theme.colors.icons.active : theme.colors.icons.inactive

  return (
    <Svg width={24} height={24} preserveAspectRatio='xMinYMin slice' viewBox='0 0 216 216' fill='none'>
      <Rect x={8.5} y={25.5} width={199} height={182} rx={17.5} stroke={color} strokeWidth={17} />
      <Path stroke={color} strokeWidth={17} d='M9 71.5h198' />
      <Path stroke={color} strokeWidth={17} strokeLinecap='round' d='M43.5 8.5v35M172.5 8.5v35' />
      <Rect x={32} y={97} width={17} height={17} rx={5} fill={color} />
      <Rect x={168} y={97} width={17} height={17} rx={5} fill={color} />
      <Rect x={134} y={97} width={17} height={17} rx={5} fill={color} />
      <Rect x={100} y={97} width={17} height={17} rx={5} fill={color} />
      <Rect x={66} y={97} width={17} height={17} rx={5} fill={color} />
      <Rect x={32} y={165} width={17} height={17} rx={5} fill={color} />
      <Rect x={134} y={165} width={17} height={17} rx={5} fill={color} />
      <Rect x={100} y={165} width={17} height={17} rx={5} fill={color} />
      <Rect x={66} y={165} width={17} height={17} rx={5} fill={color} />
      <Rect x={32} y={131} width={17} height={17} rx={5} fill={color} />
      <Rect x={168} y={131} width={17} height={17} rx={5} fill={color} />
      <Rect x={134} y={131} width={17} height={17} rx={5} fill={color} />
      <Rect x={100} y={131} width={17} height={17} rx={5} fill={color} />
      <Rect x={66} y={131} width={17} height={17} rx={5} fill={color} />
    </Svg>
  )
}

export default TimetableIcon
