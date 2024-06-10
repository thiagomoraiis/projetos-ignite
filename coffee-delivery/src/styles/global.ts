import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    bottom: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors['base-text']};
    background-color: ${({ theme }) => theme.colors.background};
  }
  body, input, textarea, button {
    ${mixins.fonts.textM}
  }
  main{
    max-width: 70rem;
    margin: 3rem auto;
  }
  button {
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`
