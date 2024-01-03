import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles/styles'

export const Span = styled.span`
  ::first-letter {
    text-transform: uppercase;
  }
`

export const TagContainer = styled.div<Props>`
  background-color: ${cores.colorFontMain};
  color: ${cores.backgroundFooter};
  font-size: 12px;
  font-weight: 700;
  padding: ${(props) => (props.type === 'italiana' ? '6px 10px' : '6px 4px')};
  display: inline-block;
  margin-left: 8px;
`
