import { useDispatch, useSelector } from 'react-redux'

import Loader from '../Loader'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

type Props = {
  store?: Loja
  isLoading: boolean
}

const Product = ({ store, isLoading }: Props) => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.ContainerItaliana>
        <S.ContainerRestauranteCarrinho>
          <S.Restaurantes>
            <p>Restaurantes</p>
          </S.Restaurantes>
          <S.Carrinho onClick={openCart}>
            <p>{items.length} produto(s) no carrinho</p>
          </S.Carrinho>
        </S.ContainerRestauranteCarrinho>

        {store && (
          <S.Imagem style={{ backgroundImage: `url(${store.capa})` }}>
            <S.Italiana>
              <p>{store.tipo}</p>
            </S.Italiana>
            <S.LaDolce>
              <p>{store.titulo}</p>
            </S.LaDolce>
          </S.Imagem>
        )}
      </S.ContainerItaliana>
    </>
  )
}

export default Product
