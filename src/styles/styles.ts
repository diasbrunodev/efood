import { createGlobalStyle } from 'styled-components'

export const colors = {
  background: '#FFF8F2',
  backgroundFooter: '#FFEBD9',
  colorFontMain: '#E66767',
  backgroundCard: '#FFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
    background-color: ${colors.background};
    color: ${colors.colorFontMain};

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 100%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`
