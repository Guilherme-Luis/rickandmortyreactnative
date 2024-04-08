import 'styled-components'

export const theme = {
  primary400: '#84cc16',
  primary500: '#65a30d',
  primary600: '#4d7c0f',
  error500: '#ef4444',
  textOnPrimary: '#ffffff',
  textOnError: '#ffffff',
  background: '#cbd5e1',
}

import type {CSSProp} from 'styled-components'

type ThemeType = typeof theme

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp
  }
}
