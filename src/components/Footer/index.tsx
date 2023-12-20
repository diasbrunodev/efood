import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

import { FooterImage, SocialMediaIcons, TextFood } from './styles'

import { FooterContainer } from './styles'
import { Link } from 'react-router-dom'

export const Footer = () => (
  <div className="container">
    <FooterContainer>
      <FooterImage>
        <Link to="/">
          <img src={logo} alt="logo da efood" />
        </Link>
      </FooterImage>
      <SocialMediaIcons>
        <Link to="/">
          <img src={instagram} alt="logo do instagram" />
        </Link>
        <Link to="/">
          <img src={facebook} alt="logo do facebook" />
        </Link>
        <Link to="/">
          <img src={twitter} alt="logo do twitter" />
        </Link>
      </SocialMediaIcons>
      <TextFood>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </TextFood>
    </FooterContainer>
  </div>
)
