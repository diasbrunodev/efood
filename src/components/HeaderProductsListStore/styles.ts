import styled from 'styled-components'
import { breakpoints, cores } from '../../styles/styles'
import { ButtonContainer } from '../../components/Button'

export const ContainerList = styled.section`
  padding: 80px 170px 72px;
`

export const ContainerItaliana = styled.div`
  position: relative;
`

export const ContainerRestauranteCarrinho = styled.div`
  p {
    font-size: 18px;
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.tablet}) {
    /* border: 1px solid;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  }
`

export const Restaurantes = styled.div`
  position: absolute;
  top: -308px;
  left: 170px;

  @media (max-width: ${breakpoints.desktop}) {
    left: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    top: -290px;
  }
`

export const Carrinho = styled.div`
  cursor: pointer;
  position: absolute;
  top: -308px;
  right: 70px;

  @media (max-width: ${breakpoints.desktop}) {
    right: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    top: -250px;
    right: 50px;
    left: 0;
    margin-left: 40px;
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -204px;

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

  ::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: ${breakpoints.desktop}) {
    left: 40px;
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

  @media (max-width: ${breakpoints.desktop}) {
    left: 40px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
  list-style: none;

  li {
    cursor: pointer;
  }
`

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  padding-top: 502px;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.colorFontMain};
  color: ${cores.backgroundCard};
  max-width: 1024px;
  height: 344px;
  z-index: 1;
`

export const ImgFechar = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 8px;
  padding-top: 8px;
  cursor: pointer;
`

export const ContentProduct = styled.div`
  padding: 8px 32px 32px 32px;
  display: flex;
`

export const ContentTextButton = styled.div`
  margin-left: 24px;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  ${ButtonContainer} {
    background-color: ${cores.backgroundFooter};
    color: ${cores.colorFontMain};
  }
`

export const ContainerP = styled.div`
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
`
