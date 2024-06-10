import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 3.5rem;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`

export const Heading = styled.div`
  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
  }
  > p {
    ${mixins.fonts.textL}
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  row-gap: 1.5rem;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 100%;
      box-sizing: content-box;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    > span {
      ${mixins.fonts.textM}
    }
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 100%;
      box-sizing: content-box;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['base-text']};
    }

    > span {
      ${mixins.fonts.textM}
    }
  }
  div:nth-child(3) {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 100%;
      box-sizing: content-box;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.yellow};
    }

    > span {
      ${mixins.fonts.textM}
    }
  }
  div:nth-child(4) {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 100%;
      box-sizing: content-box;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${mixins.fonts.textM}
    }
  }
`

export const CoffeeList = styled.section`
  max-width: 70rem;
  margin: 3rem auto;

  h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 3.375rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
  }
`
