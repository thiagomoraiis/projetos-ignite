import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CoffeeContainer = styled.article`
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors['base-button']};

  padding: 0.5rem 0.5rem 1.5rem 0.5rem;
  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  ${mixins.fonts.buttonM};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors['base-text']};
  background-color: ${({ theme }) => theme.colors['base-button']};

  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    transition: background-color 0.3s;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */

  h3 {
    ${mixins.fonts.textM};
  }
`

export const Price = styled.span`
  ${mixins.fonts.textM};
  font-weight: bold;
  color: ${({ theme }) => theme.colors['base-text']};
`
