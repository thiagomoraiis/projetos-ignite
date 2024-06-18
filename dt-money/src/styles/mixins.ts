import { css } from 'styled-components'

export const mixins = {
  fonts: {
    // Weight Bold
    titleLBold: css`
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
      line-height: 160%;
      font-weight: 700;
    `,
    titleMBold: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem;
      line-height: 160%;
      font-weight: 700;
    `,
    titleSBold: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: 700;
    `,
    titleXSBold: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 700;
    `,
    titleXXSBold: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 700;
    `,

    // Weight Regular
    textLRegular: css`
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textMRegular: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textSRegular: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textXSRegular: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textXXSRegular: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 400;
    `,
  },
}
