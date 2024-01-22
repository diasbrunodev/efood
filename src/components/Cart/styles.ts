import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/styles'

import lixeira from '../../assets/images/lixeira.png'
import { ButtonContainer } from '../Button'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    left: auto;
    right: 0;
  }
`

export const CodeCartOpenClose = styled.div`
  display: none;

  &.is-open {
    display: flex;
  }

  &.is-open-delivery {
    display: flex;
  }

  &.is-open-payment {
    display: flex;
  }

  &.is-open-confirmation-payment {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    position: fixed;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.colorFontMain};
  z-index: 1;
  max-width: 360px;
  width: 100%;

  padding: 32px 8px 0;
  overflow-y: auto;

  ${ButtonContainer} {
    width: 100%;
    text-align: center;
    display: inline-block;
    margin-bottom: 8px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      padding: 8px 0;
    }
  }
`

export const CartItem = styled.div`
  position: relative;
  background-color: ${colors.backgroundFooter};
  color: ${colors.colorFontMain};
  display: flex;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    margin-left: 8px;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }

  p {
    margin-left: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  button {
    background-image: url(${lixeira});
    background-color: transparent;
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;

  p {
    color: ${colors.backgroundFooter};
    font-size: 14px;
    font-weight: 700;
  }
`
//carrinho 2
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;

  ${Overlay} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      position: fixed;
    }
  }

  label {
    display: block;
    margin: 8px 0 8px;
  }

  input {
    width: 100%;
    height: 32px;
    border: 1px solid ${colors.backgroundFooter};
    background-color: ${colors.backgroundFooter};
    padding: 0 8px;
    font-size: 14px;
    font-weight: 700;

    &.error {
      border: 3px solid red;
    }
  }

  ${ButtonContainer} {
    max-width: 100%;
    padding: 4px 0;
  }
`

export const FormContainerDelivery = styled.div``

export const ContainerForm = styled.div`
  color: ${colors.backgroundFooter};

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
  }
`

export const InputDivNumber = styled.div`
  display: flex;
  gap: 34px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const ContainerButton = styled.div`
  margin-top: 24px;
`

export const FormContainerPayment = styled.div`
  display: none;
  flex-direction: column;
`

export const InputDivCardNumber = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const InputCardNumber = styled.div`
  input {
    width: 228px;
    margin-right: 30px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`

export const ConfirmationContainer = styled.div`
  display: none;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const ContainerP = styled.div`
  height: 286px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const CartEmpty = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.backgroundFooter};
  text-align: center;
`
