import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div``

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;

  td {
    ${mixins.fonts.textXSRegular};
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme.colors['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme.colors['green-300'] : theme.colors['red-300']};
`

export const Pagination = styled.div`
  display: flex;
  gap: 1rem;
`

export const Previous = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['green-500']};

  &:disabled {
    color: ${({ theme }) => theme.colors['gray-600']};
  }
`

export const Next = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  color: ${({ theme }) => theme.colors['green-500']};

  border: 0;
  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.colors['gray-600']};
  }
`

export const Page = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  border: 0;

  color: ${({ theme }) => theme.colors['gray-500']};
  background-color: ${({ theme }) => theme.colors['gray-700']};

  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors['green-500']};
  }
`
