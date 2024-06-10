import styled from 'styled-components'

export const CartButtonContainer = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  outline: 0;
  border: 0;

  padding-right: 0;

  svg {
    box-sizing: content-box;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors['purple-dark']};

    padding: 0.5rem;
    border-radius: 6px;
  }
  svg:hover {
    transition: background-color 0.3s;
    background-color: ${({ theme }) => theme.colors.purple};
  }
`
