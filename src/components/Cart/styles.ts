import styled from 'styled-components'
import { breakpoints, cores } from '../../styles/styles'

import lixeira from '../../assets/images/lixeira.png'
import { ButtonContainer } from '../Button'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    left: auto;
    right: 0;
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
`

export const Sidebar = styled.aside`
  background-color: ${cores.colorFontMain};
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
  background-color: ${cores.backgroundFooter};
  color: ${cores.colorFontMain};
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
    color: ${cores.backgroundFooter};
    font-size: 14px;
    font-weight: 700;
  }
`
