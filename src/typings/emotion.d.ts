import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      common: {
        black: string
        white: string
      }
      background: {
        primary: string
      }
      input: {
        text: string
        background: string
        placeholder: string
      }
      button: {
        textColor: string
        textDisabled: string
        backgroundPrimary: string
        backgroundDisabled: string
      }
      icons: {
        inactive: string
        active: string
      }
    }
    dimensions: {
      borderRadius: string
      commonHorizontalPadding: string
    }
  }
}
