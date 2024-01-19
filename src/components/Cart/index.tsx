import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button } from '../Button'

import { RootReducer } from '../../store'
import {
  clear,
  close,
  closeConfirmationPayment,
  closeDelivery,
  closePayment,
  open,
  openConfirmationPayment,
  openDelivery,
  openPayment,
  remove
} from '../../store/reducers/cart'
import { formataPreco } from '../ProductStore'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Cart = () => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const {
    isOpen,
    items,
    isOpenDelivery,
    isOpenPayment,
    isOpenConfirmationPayment
  } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      carDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(9, 'O campo precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caracter')
        .required('O campo é obrigatório'),

      carDisplayName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.carDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  const closeCartDelivery = () => {
    dispatch(closeDelivery())
  }

  const openCart = () => {
    dispatch(open())
  }

  const closeCart = () => {
    dispatch(close())
  }

  const openCartPayment = () => {
    dispatch(openPayment())
  }

  const closeCartPayment = () => {
    dispatch(closePayment())
  }

  const openCartConfirmationPayment = () => {
    dispatch(openConfirmationPayment())
    form.handleSubmit()
  }

  const closeCartConfirmationPayment = () => {
    dispatch(closeConfirmationPayment())
  }

  const goToDelivery = () => {
    dispatch(openDelivery())
  }

  const goCloseCart = () => {
    closeCart()
    closeCartDelivery()
    closeCartPayment()
    closeCartConfirmationPayment()
  }

  const returnCart = () => {
    closeCartDelivery()
    openCart()
  }

  const goToCardPayment = () => {
    closeCartDelivery()
    openCartPayment()
  }

  const returnCardDelivery = () => {
    closeCartPayment()
    goToDelivery()
  }

  const navigateHome = () => {
    navigate('/')
  }

  const goCloseCartConfirmationPayment = () => {
    goCloseCart()
    closeCartConfirmationPayment()
    navigateHome()
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <S.CodeCartOpenClose className={isOpen ? 'is-open' : ''}>
        {items.length === 0 ? (
          <S.CartContainer>
            <S.Overlay onClick={goCloseCart} />
            <S.Sidebar>
              <S.CartEmpty>
                <p>
                  O carrinho está vazio, adicione pelo menos um produto para
                  continuar com a compra.
                </p>
              </S.CartEmpty>
            </S.Sidebar>
          </S.CartContainer>
        ) : (
          <S.CartContainer>
            <S.Overlay onClick={goCloseCart} />
            <S.Sidebar>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt="Imagem do produto" />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>{formataPreco(item.preco)}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </S.CartItem>
                ))}
              </ul>
              <S.PriceContainer>
                <p>Valor total</p>
                <p>{formataPreco(getTotalPrice())}</p>
              </S.PriceContainer>
              <div onClick={goToDelivery}>
                <Button title="Continuar com a entrega" type="carrinho">
                  Continuar com a entrega
                </Button>
              </div>
            </S.Sidebar>
          </S.CartContainer>
        )}
      </S.CodeCartOpenClose>

      <S.FormContainer onSubmit={form.handleSubmit}>
        <S.CodeCartOpenClose
          className={isOpenDelivery ? 'is-open-delivery' : ''}
        >
          <S.CartContainer>
            <S.Overlay onClick={goCloseCart} />
            <S.Sidebar>
              <S.ContainerForm>
                <h3>Entrega</h3>
                <>
                  <div>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('address') ? 'error' : ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </div>
                  <S.InputDivNumber>
                    <div>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </div>
                    <div>
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </div>
                  </S.InputDivNumber>
                  <div>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complement') ? 'error' : ''
                      }
                    />
                  </div>

                  <S.ContainerButton>
                    <div onClick={goToCardPayment}>
                      <Button title="Continuar com o pagamento" type="carrinho">
                        Continuar com o pagamento
                      </Button>
                    </div>

                    <div onClick={returnCart}>
                      <Button title="Voltar para o carrinho" type="carrinho">
                        Voltar para o carrinho
                      </Button>
                    </div>
                  </S.ContainerButton>
                </>
              </S.ContainerForm>
            </S.Sidebar>
          </S.CartContainer>
        </S.CodeCartOpenClose>

        <S.CodeCartOpenClose className={isOpenPayment ? 'is-open-payment' : ''}>
          <S.CartContainer>
            <S.Overlay onClick={goCloseCart} />
            <S.Sidebar>
              <S.ContainerForm>
                <h3>
                  Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
                </h3>
                <>
                  <div>
                    <label htmlFor="carDisplayName">Nome no cartão</label>
                    <input
                      id="carDisplayName"
                      type="text"
                      name="carDisplayName"
                      value={form.values.carDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('carDisplayName') ? 'error' : ''
                      }
                    />
                  </div>
                  <S.InputDivCardNumber>
                    <S.InputCardNumber>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </S.InputCardNumber>
                    <div>
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                        mask="999"
                      />
                    </div>
                  </S.InputDivCardNumber>
                  <S.InputDivNumber>
                    <div>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                    <div>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask="9999"
                      />
                    </div>
                  </S.InputDivNumber>
                  <S.ContainerButton>
                    <div onClick={openCartConfirmationPayment}>
                      <Button
                        title="Finalizar pagamento"
                        type="carrinho"
                        disabled={isLoading}
                      >
                        {isLoading
                          ? 'Finalizando pagamento...'
                          : 'Finalizar pagamento'}
                      </Button>
                    </div>

                    <div onClick={returnCardDelivery}>
                      <Button
                        title="Voltar para a edição de endereço"
                        type="carrinho"
                      >
                        Voltar para a edição de endereço
                      </Button>
                    </div>
                  </S.ContainerButton>
                </>
              </S.ContainerForm>
            </S.Sidebar>
          </S.CartContainer>
        </S.CodeCartOpenClose>
      </S.FormContainer>

      {isSuccess && (
        <S.FormContainer>
          <S.CodeCartOpenClose
            className={
              isOpenConfirmationPayment ? 'is-open-confirmation-payment' : ''
            }
          >
            <S.CartContainer>
              <S.Overlay onClick={goCloseCart} />
              <S.Sidebar>
                {data && isSuccess ? (
                  <S.ContainerForm>
                    <h3>Pedido realizado - {data.orderId}</h3>
                    <>
                      <S.ContainerP>
                        <p>
                          Estamos felizes em informar que seu pedido já está em
                          processo de preparação e, em breve, será entregue no
                          endereço fornecido.
                        </p>
                        <p>
                          Gostaríamos de ressaltar que nossos entregadores não
                          estão autorizados a realizar cobranças extras.
                        </p>
                        <p>
                          Lembre-se da importância de higienizar as mãos após o
                          recebimento do pedido, garantindo assim sua segurança
                          e bem-estar durante a refeição.
                        </p>
                        <p>
                          Esperamos que desfrute de uma deliciosa e agradável
                          experiência gastronômica. Bom apetite!
                        </p>
                      </S.ContainerP>
                      <S.ContainerButton>
                        <div onClick={goCloseCartConfirmationPayment}>
                          <Button title="Concluir" type="carrinho">
                            Concluir
                          </Button>
                        </div>
                      </S.ContainerButton>
                    </>
                  </S.ContainerForm>
                ) : (
                  ''
                )}
              </S.Sidebar>
            </S.CartContainer>
          </S.CodeCartOpenClose>
        </S.FormContainer>
      )}
    </>
  )
}

export default Cart
