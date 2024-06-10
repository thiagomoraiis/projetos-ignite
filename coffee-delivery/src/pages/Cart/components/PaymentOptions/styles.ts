import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const PaymentOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const ButtonOption = styled.button`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  padding: 1rem;
  width: 11.125rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['base-button']};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.purple};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    transition: background-color 0.3s;
  }
  span {
    ${mixins.fonts.buttonM};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
