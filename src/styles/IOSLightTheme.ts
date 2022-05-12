import { Theme } from '@emotion/react'

import { fontSizes } from '~styles/fontSizes'

export const IOSLightTheme: Theme = {
  colors: {
    common: {
      primary: '#007AFF',
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F9F9F9',
    },
    input: {
      text: '#000000',
      background: '#76768030',
      placeholder: '#3C3C4396',
    },
    button: {
      textColor: '#FFFFFF',
      textDisabled: '#3C3C434C',
      backgroundPrimary: '#007AFF',
      backgroundDisabled: '#74748014',
    },
    icons: {
      inactive: '#000000',
      active: '#007AFF',
    },
    border: {
      primary: '#B2B1B2',
      secondary: '#B2B1B2',
    },
  },
  dimensions: {
    borderRadius: '10px',
    commonHorizontalPadding: '16px',
    ...fontSizes,
  },
}
