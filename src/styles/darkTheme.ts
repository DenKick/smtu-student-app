import { Theme } from '@emotion/react'

export const darkTheme: Theme = {
  colors: {
    background: {
      primary: '#000000',
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
  },
  dimensions: {
    borderRadius: '10px',
    commonHorizontalPadding: '16px',
  },
}
