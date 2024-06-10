import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CartTotalContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.colors['base-card']};

  &:last-child {
    border-radius: 6px 48px;
  }
`

export const ConfirmButton = styled.button`
  ${mixins.fonts.buttonG};
  text-align: center;
  border-radius: 6px;

  height: 2.5rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
    transition: background-color 0.3s;
    cursor: pointer;
  }
  &:focus {
    transform: scale(1.0125);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const TotalContainer = styled.div`
  display: grid;
  row-gap: 0.75rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      ${mixins.fonts.textS};
      color: ${({ theme }) => theme.colors['base-text']};
    }
    > strong {
      ${mixins.fonts.textL};
      font-weight: 700;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }
`
