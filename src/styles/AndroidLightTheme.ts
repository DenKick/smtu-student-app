import { Theme } from '@emotion/react'

import { fontSizes } from '~styles/fontSizes'

export const AndroidLightTheme: Theme = {
  colors: {
    common: {
      primary: '#1976D2',
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#FAFAFA',
    },
    input: {
      text: '#000000',
      background: '#76768030',
      placeholder: '#3C3C4396',
    },
    button: {
      textColor: '#FFFFFF',
      textDisabled: '#3C3C434C',
      backgroundPrimary: '#1976D2',
      backgroundDisabled: '#74748014',
    },
    icons: {
      inactive: '#000000',
      active: '#1976D2',
    },
    border: {
      primary: '#B2B1B2',
      secondary: '#9E9E9E',
    },
  },
  dimensions: {
    borderRadius: '10px',
    commonHorizontalPadding: '16px',
    ...fontSizes,
  },
}
