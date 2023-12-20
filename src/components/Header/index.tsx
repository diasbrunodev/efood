import { HeaderBar, Imagem, Titulo } from './styles'

import vetorFundo from '../../assets/images/vectorFundo.png'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export const Header = () => (
  <Imagem style={{ backgroundImage: `url(${vetorFundo})` }}>
    <HeaderBar>
      <Link to="/">
        <img src={logo} alt="logo da efood" />
      </Link>
    </HeaderBar>
    <div>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Imagem>
)
