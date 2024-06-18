import { SearchForm } from './SearchForm'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { useContextSelector } from 'use-context-selector'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { TransactionsContext } from '../../context/TransactionsContext'
import { usePagination } from '../../hooks/usePagination'
import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  Container,
  Next,
  Page,
  Pagination,
  Previous,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  const { action, page } = usePagination(transactions, 2, 10)

  return (
    <Container>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {page.data.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.type === 'income' ? 'Entrada' : 'Saída'}</td>
                <td>{dateFormatter(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>

        <Pagination>
          <Previous onClick={action.previous} disabled={page.previous === null}>
            <CaretLeft size={18} weight="bold" />
          </Previous>
          {page.numbers.map((number, index) => (
            <Page
              key={index}
              onClick={() => action.goTo(number)}
              disabled={page.current === number}
            >
              {number}
            </Page>
          ))}
          <Next onClick={action.next} disabled={page.current === null}>
            <CaretRight size={18} weight="bold" />
          </Next>
        </Pagination>
      </TransactionsContainer>
    </Container>
  )
}
