import { Link } from 'react-router-dom'

import vetorFundo from '../../assets/images/vectorFundo.png'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'

export const Header = () => (
  <S.Imagem style={{ backgroundImage: `url(${vetorFundo})` }}>
    <S.HeaderBar>
      <Link to="/" title="Clique aqui para acessar a Home">
        <h1>
          <img src={logo} alt="logo da efood" />
        </h1>
      </Link>
    </S.HeaderBar>
    <div>
      <S.Titulo>
        Viva experiências gastronômicas no conforto da sua casa
      </S.Titulo>
    </div>
  </S.Imagem>
)
