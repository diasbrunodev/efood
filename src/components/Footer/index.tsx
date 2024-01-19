import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

import * as S from './styles'

export const Footer = () => (
  <div className="container">
    <S.FooterContainer>
      <S.FooterImage>
        <Link to="/" title="Clique aqui para acessar a Home">
          <img src={logo} alt="logo da efood" />
        </Link>
      </S.FooterImage>
      <S.SocialMediaIcons>
        <Link
          to="/"
          title="Clique aqui para acessar a nossa página no Instagram"
        >
          <img src={instagram} alt="logo do instagram" />
        </Link>
        <Link
          to="/"
          title="Clique aqui para acessar a nossa página no Facebook"
        >
          <img src={facebook} alt="logo do facebook" />
        </Link>
        <Link to="/" title="Clique aqui para acessar a nossa página no Twitter">
          <img src={twitter} alt="logo do twitter" />
        </Link>
      </S.SocialMediaIcons>
      <S.TextFood>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </S.TextFood>
    </S.FooterContainer>
  </div>
)
