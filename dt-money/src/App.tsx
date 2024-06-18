import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styles/themes/default'
import { TransactionsProvider } from './context/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
