import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const Card = styled.div`
  width: 320px;
  background-color: ${cores.colorFontMain};
  margin-bottom: 48px;
  padding: 8px;
  color: ${cores.backgroundFooter};

  img {
    margin-bottom: 8px;
  }
`

export const CardDescriptionLaDolce = styled.div`
  h3 {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 900;
  }
`

export const Descricao = styled.p`
  line-height: 22px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
`
