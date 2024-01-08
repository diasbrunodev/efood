import styled from 'styled-components'
import { breakpoints, cores } from '../../styles/styles'

export const AllContainer = styled.section`
  width: 1024px;
  margin: auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 768px;
    width: 100%;
  }
`

export const ContainerList = styled.section`
  padding-top: 80px;
  padding-bottom: 72px;
`

export const ContainerItaliana = styled.div`
  position: relative;
`

export const ContainerRestauranteCarrinho = styled.div`
  p {
    font-size: 18px;
    font-weight: 900;
  }
`

export const Restaurantes = styled.div`
  display: inline-block;
  position: absolute;
  top: 60px;
  left: 170px;
`

export const Carrinho = styled.div`
  display: inline-block;
  position: absolute;
  top: 60px;
  right: 170px;
`

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 162px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  P {
    color: ${cores.backgroundCard};
    font-size: 32px;
  }
`

export const Italiana = styled.div`
  position: absolute;
  top: 25px;
  left: 170px;
  z-index: 1;

  p {
    font-weight: 100;
  }
`

export const LaDolce = styled.div`
  position: absolute;
  bottom: 32px;
  left: 170px;
  z-index: 1;

  p {
    font-weight: 900;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0 48px;
  list-style: none;
  max-width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 36px;

    max-width: 768px;
    width: 80%;
    margin: 56px auto 48px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const AllCard = styled.li`
  /* cursor: pointer; */
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
    height: 100%;
    margin: auto;
  }
`
