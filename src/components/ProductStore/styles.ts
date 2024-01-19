import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  background-color: ${colors.colorFontMain};
  padding: 8px;
  color: ${colors.backgroundFooter};
  cursor: pointer;

  img {
    display: block;
    margin-bottom: 8px;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const CardDescriptionLaDolce = styled.div`
  h3 {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 900;
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    text-align: center;
    white-space: nowrap;
  }
`

export const Descricao = styled.p`
  line-height: 22px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;

  @media (max-width: ${breakpoints.desktop}) {
    height: 110px;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    z-index: 1;
  }

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
  background-color: ${colors.colorFontMain};
  color: ${colors.backgroundCard};
  height: 344px;
  z-index: 1;
  max-width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 70%;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 8px 32px 32px;
  }
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

  @media (max-width: ${breakpoints.desktop}) {
    width: 200%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 30%;
    height: 30%;
  }
`

export const ContentTextButton = styled.div`
  margin-left: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 18px;
      margin-top: 8px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }

  ${ButtonContainer} {
    background-color: ${colors.backgroundFooter};
    color: ${colors.colorFontMain};

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 16px;
    }
  }
`

export const ContainerP = styled.div`
  width: 656px;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`
