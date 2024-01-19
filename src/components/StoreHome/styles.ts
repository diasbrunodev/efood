import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const Card = styled.div`
  position: relative;
  margin-bottom: 48px;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const CardDescription = styled.div`
  background-color: ${colors.backgroundCard};
  border-right: 1px solid ${colors.colorFontMain};
  border-bottom: 1px solid ${colors.colorFontMain};
  border-left: 1px solid ${colors.colorFontMain};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`

export const Classification = styled.div`
  display: flex;
`

export const Note = styled.p`
  margin-right: 8px;
  font-size: 18px;
  font-weight: 700;
`

export const DivDescription = styled.div`
  padding: 8px;

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  div {
    margin-top: 16px;
  }
`
