import * as zod from 'zod'
import { useContextSelector } from 'use-context-selector'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../context/TransactionsContext'
import { useForm } from 'react-hook-form'

const newTransactionFormSchema = zod.object({
  description: zod
    .string()
    .min(2, 'A descrição precisa ter pelo menos 2 caracteres'),
  price: zod.number().min(1, 'O valor mínimo é 1 real'),
  category: zod
    .string()
    .min(3, 'A categoria precisa ter pelo menos 3 caracteres'),
  type: zod.enum(['income', 'outcome']),
})

type TransactionFormType = zod.infer<typeof newTransactionFormSchema>

export function useTransactionForm() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { isSubmitting },
  } = useForm<TransactionFormType>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      description: '',
      price: 0,
      category: '',
    },
  })

  async function handleCreateNewTransaction(data: TransactionFormType) {
    await createTransaction(data)
    reset()
  }

  return {
    register,
    handleCreateNewTransaction,
    handleSubmit,
    control,
    setValue,
    isSubmitting,
  }
}
