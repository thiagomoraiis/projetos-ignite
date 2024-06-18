import { RefObject } from 'react'
import { Controller } from 'react-hook-form'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { useTransactionForm } from '../../hooks/useTransactionForm'
import {
  FormContainer,
  Input,
  RadioButton,
  SubmitButton,
  TransactionsButton,
  TransactionsType,
} from './styles'

type TransactionsFormProps = {
  incomeButtonRef: RefObject<HTMLLabelElement>
  outcomeButtonRef: RefObject<HTMLLabelElement>
}

export function TransactionsForm({
  incomeButtonRef,
  outcomeButtonRef,
}: TransactionsFormProps) {
  const {
    handleCreateNewTransaction,
    handleSubmit,
    isSubmitting,
    register,
    control,
    setValue,
  } = useTransactionForm()

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewTransaction)}
      autoComplete="off"
    >
      <FormContainer>
        <Input
          type="text"
          required
          placeholder="Descrição"
          {...register('description')}
        />
        <Input
          type="number"
          required
          placeholder="Preço"
          {...register('price', { valueAsNumber: true })}
        />
        <Input
          type="text"
          required
          placeholder="Categoria"
          {...register('category')}
          onBlur={() => {
            if (incomeButtonRef.current) {
              incomeButtonRef.current.focus()
            }
          }}
        />

        <Controller
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <TransactionsType>
                <RadioButton
                  type="radio"
                  id="income"
                  value="income"
                  checked={field.value === 'income'}
                  onChange={() => field.onChange('income')}
                />
                <TransactionsButton
                  as="label"
                  htmlFor="income"
                  variant="income"
                  checked={field.value === 'income'}
                  ref={incomeButtonRef}
                  onClick={() => setValue('type', 'income')}
                  tabIndex={0}
                >
                  <ArrowCircleUp size={24} weight="bold" />
                  Entrada
                </TransactionsButton>

                <RadioButton
                  type="radio"
                  id="outcome"
                  value="outcome"
                  checked={field.value === 'outcome'}
                  onChange={() => field.onChange('outcome')}
                />
                <TransactionsButton
                  as="label"
                  htmlFor="outcome"
                  variant="outcome"
                  checked={field.value === 'outcome'}
                  ref={outcomeButtonRef}
                  onClick={() => setValue('type', 'outcome')}
                  tabIndex={0}
                >
                  <ArrowCircleDown size={24} weight="bold" />
                  Saída
                </TransactionsButton>
              </TransactionsType>
            )
          }}
        />
      </FormContainer>

      <SubmitButton type="submit" disabled={isSubmitting}>
        Cadastrar
      </SubmitButton>
    </form>
  )
}
