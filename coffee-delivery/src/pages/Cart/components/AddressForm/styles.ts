import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.5rem;

  > div:nth-child(1) {
    grid-column: 1 / 5;
  }
  > div:nth-child(2) {
    grid-column: 1 / 13;
  }
  > div:nth-child(3) {
    grid-column: 1 / 5;
  }
  > div:nth-child(4) {
    grid-column: 5 / 13;
  }
  > div:nth-child(5) {
    grid-column: 1 / 5;
  }
  > div:nth-child(6) {
    grid-column: 5 / 11;
  }
  > div:nth-child(7) {
    grid-column: 11 / 13;
  }
`

export const AddressInput = styled.input`
  ${mixins.fonts.textS};
  padding: 0.75rem;
  width: 100%;

  color: ${({ theme }) => theme.colors['base-text']};
  background-color: ${({ theme }) => theme.colors['base-input']};

  border-radius: 6px;
  outline: 2px solid transparent;
  border: 2px solid ${({ theme }) => theme.colors['base-button']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  &:focus {
    border: 2px solid transparent;
    outline: 2px solid ${({ theme }) => theme.colors.yellow};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const AddressSelect = styled.select`
  ${mixins.fonts.textS};
  padding: 0.75rem;
  width: 100%;

  color: ${({ theme }) => theme.colors['base-text']};
  background-color: ${({ theme }) => theme.colors['base-input']};

  border-radius: 6px;
  outline: 2px solid transparent;
  border: 2px solid ${({ theme }) => theme.colors['base-button']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  &:focus {
    border: 2px solid transparent;
    outline: 2px solid ${({ theme }) => theme.colors.yellow};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ErrorMessage = styled.span`
  ${mixins.fonts.textXS}
  display: block;
  max-width: 100%;
  margin-top: 0.25rem;
  color: red;
`
