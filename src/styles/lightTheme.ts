import { Theme } from '@emotion/react'

export const lightTheme: Theme = {
  colors: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      primary: '#FFFFFF',
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
  },
  dimensions: {
    borderRadius: '10px',
    commonHorizontalPadding: '16px',
  },
}
