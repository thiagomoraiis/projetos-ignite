import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

/*
Esse código irá sobreescreve a interface de temas padrões do
styled components para que ela extenda a tipagem do nosso tema padrão
da aplicação
*/
