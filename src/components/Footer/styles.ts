import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/styles'

export const FooterContainer = styled.div`
  background-color: ${colors.backgroundFooter};
`

export const FooterImage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 32px auto 80px;
`

export const TextFood = styled.div`
  width: 480px;
  margin: auto;
  padding-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  p {
    text-align: center;
    font-size: 10px;
    font-weight: 400;
  }
`
