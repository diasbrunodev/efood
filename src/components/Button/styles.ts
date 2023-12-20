import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const ButtonContainer = styled(Link)<Props>`
  background-color: ${(props) =>
    props.type === 'saibaMais' ? cores.colorFontMain : cores.backgroundFooter};
  color: ${(props) =>
    props.type === 'saibaMais' ? cores.backgroundFooter : cores.colorFontMain};
  padding: ${(props) => (props.type === 'saibaMais' ? '4px 6px' : '4px 84px')};
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  text-decoration: none;
`
