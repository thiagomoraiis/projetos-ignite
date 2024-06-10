import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const SuccessHeader = styled.header`
  h2 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
  p {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const SuccessInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2.5rem;

  min-width: 32.875rem;

  position: relative;
  border-radius: 8px 48px 8px 48px;
  background: white;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(90deg, #dbac2c 0%, #8047f8 80%);
  }
`

const VARIANTS_COLORS = {
  yellow: '#DBAC2C',
  purple: '#8047F8',
  'yellow-dark': '#C47F17',
}

type BGProps = {
  variant: keyof typeof VARIANTS_COLORS
}

export const Info = styled.div<BGProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;

  svg {
    box-sizing: content-box;
    padding: 0.5rem;
    border-radius: 100%;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${(props) => VARIANTS_COLORS[props.variant]};
  }
  p {
    ${mixins.fonts.textM};
  }
`
