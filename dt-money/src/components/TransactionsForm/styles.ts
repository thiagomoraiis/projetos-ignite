import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const FormContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

type TransactionsButtonProps = {
  variant: 'income' | 'outcome'
  checked: boolean
}

export const TransactionsType = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const RadioButton = styled.input`
  display: none;
`

export const TransactionsButton = styled.label<TransactionsButtonProps>`
  ${mixins.fonts.textXSRegular}

  color: ${({ theme }) => theme.colors['gray-300']};
  background-color: ${({ theme, checked, variant }) =>
    !checked
      ? theme.colors['gray-700']
      : variant === 'income'
        ? theme.colors['green-500']
        : theme.colors['red-500']};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  padding: 1rem;
  border-radius: 6px;
  border: 0;

  cursor: pointer;

  svg {
    color: ${({ theme, variant, checked }) =>
      checked
        ? theme.colors.white
        : variant === 'income'
          ? theme.colors['green-300']
          : theme.colors['red-300']};
  }

  &:hover {
    background-color: ${({ theme, checked }) =>
      !checked && theme.colors['gray-600']};
    opacity: ${({ checked }) => checked && 0.9};
    transition: background-color 0.3s;
  }
`

export const Input = styled.input`
  ${mixins.fonts.textXSRegular};
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['gray-900']};
  color: ${({ theme }) => theme.colors['gray-300']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const SubmitButton = styled.button`
  ${mixins.fonts.titleXSBold};
  height: 50px;
  border: 0;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['green-500']};
  padding: 0 1.25rem;
  cursor: pointer;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['green-700']};
    transition: background-color 0.2s;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
