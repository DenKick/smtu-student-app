import React from 'react'
import { useColorScheme } from 'react-native'

import LogoDark from '~icons/LogoDark'
import LogoLight from '~icons/LogoLight'

export interface Props {
  scale?: number
}

const Logo: React.FC<Props> = ({ scale }) => {
  const isDarkTheme = useColorScheme() === 'dark'

  return isDarkTheme ? <LogoDark scale={scale} /> : <LogoLight scale={scale} />
}

export default Logo
