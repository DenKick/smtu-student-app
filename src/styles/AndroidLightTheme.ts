import { Theme } from '@emotion/react'

export const AndroidLightTheme: Theme = {
  colors: {
    common: {
      primary: '#1976D2',
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#EEEEEE',
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
      primary: '#b2b1b2',
    },
  },
  dimensions: {
    borderRadius: '10px',
    commonHorizontalPadding: '16px',
  },
}
