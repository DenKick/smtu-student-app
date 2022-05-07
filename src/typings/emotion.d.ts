import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: {
        primary: string
      }
      primary: string
      positive: string
      negative: string
    }
  }
}
