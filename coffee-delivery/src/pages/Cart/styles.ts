import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;

    div + div {
      margin-top: 0.75rem;
    }
  }
`

export const InfoContainer = styled.div`
  h2 {
    ${mixins.fonts.titleXS};
    margin-bottom: 1rem;
  }
`

export const AddressContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const AddressHeader = styled.header`
  display: flex;
  align-items: flex-start;

  column-gap: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
  p {
    ${mixins.fonts.textS}
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const PaymentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const PaymentHeader = styled.header`
  display: flex;
  align-items: flex-start;

  column-gap: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
  p {
    ${mixins.fonts.textS}
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
