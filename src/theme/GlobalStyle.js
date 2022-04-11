import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.lightGrey};
    font-family: Raleway, sans-serif;
    transition: all 0.50s linear;
  }
  `
