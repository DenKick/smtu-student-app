import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      common: {
        primary: string
        black: string
        white: string
      }
      background: {
        primary: string
        secondary: string
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
      border: {
        primary: string
        secondary: string
      }
    }
    dimensions: {
      borderRadius: string
      commonHorizontalPadding: string
      fontSize: {
        sectionHeading: string
        large: string
        normal: string
        small: string
      }
    }
  }
}
