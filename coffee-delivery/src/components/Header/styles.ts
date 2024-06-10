import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  > a {
    text-decoration: none;
  }
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    column-gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors['purple-light']};

    span {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  a {
    display: flex;
    align-items: center;
    border-radius: 6px;
    text-decoration: none;

    position: relative;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    padding: 0.5rem;

    &:hover {
      transition: opacity 0.3s;
      opacity: 0.8;
    }

    svg {
      color: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  ${mixins.fonts.textS};
  font-weight: 800;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['yellow-dark']};

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`
