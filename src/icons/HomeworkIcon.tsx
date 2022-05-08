import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

import { useTheme } from '@emotion/react'

interface Props {
  isActive?: boolean
}

const HomeworkIcon: React.FC<Props> = ({ isActive }) => {
  const theme = useTheme()

  const color = isActive ? theme.colors.icons.active : theme.colors.icons.inactive

  return (
    <Svg width={24} height={24} preserveAspectRatio='xMinYMin slice' viewBox='0 0 216 216' fill='none'>
      <Rect x={8.5} y={25.5} width={199} height={182} rx={17.5} stroke={color} strokeWidth={17} />
      <Path
        stroke={color}
        strokeWidth={17}
        strokeLinecap='round'
        d='M43.5 82.5h129M53.5 8.5v35M162.5 8.5v35M43.5 134.5h129M43.5 161.5h63M43.5 108.5h129M110.5 8.5v35'
      />
    </Svg>
  )
}

export default HomeworkIcon
