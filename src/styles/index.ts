import { createGlobalStyle } from 'styled-components'

export const cores = {
  background: '#FFF8F2',
  backgroundFooter: '#FFEBD9',
  colorFontMain: '#E66767',
  backgroundCard: '#FFF'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
    background-color: ${cores.background};
    color: ${cores.colorFontMain};
  }
`
