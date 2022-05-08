import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
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
    }
    dimensions: {
      borderRadius: string
      commonHorizontalPadding: string
    }
  }
}
