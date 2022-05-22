import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { useTheme } from '@emotion/react'

const ChevronIcon = () => {
  const theme = useTheme()

  return (
    <Svg width={9} height={16} fill='none'>
      <Path
        d='M8.996 8.007c0-.34-.125-.623-.39-.888L2.213.869a1.052 1.052 0 0 0-.78-.316c-.623 0-1.13.49-1.13 1.112 0 .307.134.59.358.814l5.677 5.52-5.677 5.536a1.133 1.133 0 0 0-.357.814c0 .622.506 1.12 1.129 1.12.307 0 .564-.108.78-.323l6.391-6.251c.274-.266.39-.548.39-.888Z'
        fill={theme.colors.border.primary}
      />
    </Svg>
  )
}

export default ChevronIcon
