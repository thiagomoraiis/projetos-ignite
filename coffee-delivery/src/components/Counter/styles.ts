import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};

  width: 4.5rem;
  padding: 0.5rem 0.25rem;

  &:focus-within > input {
    outline: 0;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    transition: background-color 0.3s;
  }
`

const BaseButton = styled.button`
  display: flex;
  align-items: center;

  ${mixins.fonts.buttonG};
  padding: 0;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.purple};
`

export const IncreaseButton = styled(BaseButton)`
  &:hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const DecreaseButton = styled(BaseButton)`
  &:hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const Quantity = styled.span`
  ${mixins.fonts.textM};

  text-align: center;
  vertical-align: center;

  width: 1.5rem;

  border: 0;
  background-color: transparent;
`
