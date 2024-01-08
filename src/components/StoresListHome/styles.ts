import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const ContainerList = styled.section`
  padding: 80px 170px 72px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 80px 18px 72px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
