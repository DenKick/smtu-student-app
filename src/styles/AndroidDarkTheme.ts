import { Theme } from '@emotion/react'

export const AndroidDarkTheme: Theme = {
  colors: {
    common: {
      primary: '#1565C0',
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      primary: '#191919',
      secondary: '#252525',
    },
    input: {
      text: '#FFFFFF',
      background: '#1C1C1E',
      placeholder: '#EBEBF54B',
    },
    button: {
      textColor: '#FFFFFF',
      textDisabled: '#EBEBF54C',
      backgroundPrimary: '#1565C0',
      backgroundDisabled: '#7474802E',
    },
    icons: {
      inactive: '#FFFFFF',
      active: '#1565C0',
    },
    border: {
      primary: '#2a2a2a',
    },
  },
  dimensions: {
    borderRadius: '10px',
    commonHorizontalPadding: '16px',
  },
}