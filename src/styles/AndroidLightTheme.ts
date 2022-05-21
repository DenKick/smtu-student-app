import { Theme } from '@emotion/react'

import { fontSizes } from '~styles/fontSizes'

export const AndroidLightTheme: Theme = {
  colors: {
    common: {
      primary: '#0656cf',
      warning: '#B3261E',
      warningBackground: '#FFDAD4',
      onWarningBackground: '#410001',
      accent: '#b9f296',
      onAccent: '#062100',
      black: '#1b1b1f',
      white: '#FFFFFF',
    },
    background: {
      primary: '#FFFBFE',
      secondary: '#F1EFF4',
    },
    input: {
      text: '#1b1b1f',
      background: '#76768030',
      placeholder: '#79747E',
    },
    button: {
      textColor: '#FFFFFF',
      textDisabled: '#3C3C434C',
      backgroundPrimary: '#1976D2',
      backgroundDisabled: '#74748014',
    },
    icons: {
      inactive: '#1b1b1f',
      active: '#ffffff',
    },
    border: {
      primary: '#79747E',
      secondary: '#79747E',
    },
    handleComponent: '#FAFAFF',
  },
  dimensions: {
    borderRadius: '20px',
    commonHorizontalPadding: '16px',
    ...fontSizes,
  },
}
