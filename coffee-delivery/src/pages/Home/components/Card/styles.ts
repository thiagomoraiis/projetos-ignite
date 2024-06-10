import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 16rem;
  border-radius: 10px 48px;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors['base-card']};

  img {
    position: absolute;
    top: -20px;
  }
`

export const Tags = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0;
  margin: 4.5rem 0 0 0;

  list-style-type: none;

  li {
    ${mixins.fonts.tag}
    color: ${({ theme }) => theme.colors['yellow-dark']};
    background-color: ${({ theme }) => theme.colors['yellow-light']};

    border-radius: 100px;
    padding: 0.25rem 0.5rem;
  }
`

export const CardContent = styled.div`
  text-align: center;

  margin: 1rem 0;

  h3 {
    ${mixins.fonts.titleS};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 0.5rem;
  }
  p {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 1rem;
  margin-top: 1rem;

  > div {
    display: flex;
    align-items: center;

    gap: 0.25rem;
  }

  p {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};

    span {
      ${mixins.fonts.titleM};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const Buy = styled.div``
