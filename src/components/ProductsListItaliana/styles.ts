import styled from 'styled-components'
import { cores } from '../../styles/styles'
import { ButtonContainer } from '../Button/styles'

export const AllContainer = styled.section`
  width: 1024px;
  margin: auto;
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
  margin-top: 56px;
  list-style: none;
  margin-bottom: 48px;
  max-width: 1024px;
`

export const AllCard = styled.li`
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.colorFontMain};
  color: ${cores.backgroundCard};
  height: 344px;
  z-index: 1;
  max-width: 1024px;
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

export const ModalImg = styled.div`
  width: 280px;
  height: 280px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  width: 656px;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
`
