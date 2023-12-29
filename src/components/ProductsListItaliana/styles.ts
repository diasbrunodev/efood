import styled from 'styled-components'
import { cores } from '../../styles/styles'
import { ButtonContainer } from '../Button/styles'

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
