import { Theme } from '@emotion/react'

import { fontSizes } from '~styles/fontSizes'

export const AndroidDarkTheme: Theme = {
  colors: {
    common: {
      primary: '#b0c5ff',
      warning: '#F2B8B5',
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      primary: '#1b1b1f',
      secondary: '#262529',
    },
    input: {
      text: '#e3e1e6',
      background: '#1D1D1D',
      placeholder: '#938F99',
    },
    button: {
      textColor: '#002b76',
      textDisabled: '#00184a',
      backgroundPrimary: '#b0c5ff',
      backgroundDisabled: '#d9e2ff',
    },
    icons: {
      inactive: '#FFFFFF',
      active: '#002b76',
    },
    border: {
      primary: '#938F99',
      secondary: '#616161',
    },
    handleComponent: '#EBEBF54C',
  },
  dimensions: {
    borderRadius: '20px',
    commonHorizontalPadding: '16px',
    ...fontSizes,
  },
}
