import { ReactNode } from 'react'
import { TransactionType } from './transactions'

export type TransactionsContextProps = {
  children: ReactNode
}

export type CreateTransactionType = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

export type TransactionsContextType = {
  transactions: TransactionType[]
  fetchTransactions(query?: string): Promise<void>
  createTransaction(data: CreateTransactionType): Promise<void>
}
