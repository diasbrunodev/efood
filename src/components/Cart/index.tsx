import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  PriceContainer,
  Sidebar
} from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductStore'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />

        <Sidebar>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt="Imagem do produto" />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </CartItem>
            ))}
          </ul>
          <PriceContainer>
            <p>Valor total</p>
            <p>{formataPreco(getTotalPrice())}</p>
          </PriceContainer>
          <Button title="Continuar com a entrega" type="carrinho">
            Continuar com a entrega
          </Button>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
