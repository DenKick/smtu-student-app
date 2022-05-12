import { Theme } from '@emotion/react'

import { fontSizes } from '~styles/fontSizes'

export const IOSDarkTheme: Theme = {
  colors: {
    common: {
      primary: '#0A84FF',
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      primary: '#0F0F0F',
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
      primary: '#2A2A2A',
      secondary: '#2A2A2A',
    },
    handleComponent: '#EBEBF54C',
  },
  dimensions: {
    borderRadius: '10px',
    commonHorizontalPadding: '16px',
    ...fontSizes,
  },
}
