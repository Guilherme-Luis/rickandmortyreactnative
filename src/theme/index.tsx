import 'styled-components'

export const theme = {
  primary400: '#818CF8',
  primary500: '#6366f1',
  primary600: '#4F46E5',
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
