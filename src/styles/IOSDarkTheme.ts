import { Theme } from '@emotion/react'

export const IOSDarkTheme: Theme = {
  colors: {
    common: {
      primary: '#0A84FF',
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      primary: '#000000',
      secondary: '#1D1D1DF0',
    },
    input: {
      text: '#FFFFFF',
      background: '#1C1C1E',
      placeholder: '#EBEBF54B',
    },
    button: {
      textColor: '#FFFFFF',
      textDisabled: '#EBEBF54C',
      backgroundPrimary: '#0A84FF',
      backgroundDisabled: '#7474802E',
    },
    icons: {
      inactive: '#FFFFFF',
      active: '#0A84FF',
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
