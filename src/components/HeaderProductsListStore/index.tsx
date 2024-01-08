import { useDispatch, useSelector } from 'react-redux'
import { Loja } from '../../pages/Home'
import {
  Carrinho,
  ContainerItaliana,
  ContainerRestauranteCarrinho,
  Imagem,
  Italiana,
  LaDolce,
  Restaurantes
} from './styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  store: Loja
}

const Product = ({ store }: Props) => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <ContainerItaliana>
        <ContainerRestauranteCarrinho>
          <Restaurantes>
            <p>Restaurantes</p>
          </Restaurantes>
          <Carrinho onClick={openCart}>
            <p>{items.length} produto(s) no carrinho</p>
          </Carrinho>
        </ContainerRestauranteCarrinho>

        <Imagem style={{ backgroundImage: `url(${store.capa})` }}>
          <Italiana>
            <p>{store.tipo}</p>
          </Italiana>
          <LaDolce>
            <p>{store.titulo}</p>
          </LaDolce>
        </Imagem>
      </ContainerItaliana>
    </>
  )
}

export default Product
