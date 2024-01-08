import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const Imagem = styled.div`
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    background-color: red;
  }

  div {
    display: flex;
    justify-content: center;
  }
`

export const HeaderBar = styled.div`
  margin: 0 auto 136px;
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 540px;
  text-align: center;
  font-weight: 900;
`
