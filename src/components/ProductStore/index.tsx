import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '../Button'

import { ModalState } from '../ProductsListStore'
import { add, open } from '../../store/reducers/cart'

import fechar from '../../assets/images/fechar.png'

import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
  type: 'saibaMais' | 'carrinho'
  onClick?: () => void
  item: CardapioItem
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const ProductStore = ({ image, title, description, item }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    dispatch(open())
    closeModal()
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    title: '',
    modalDescription: '',
    preco: 0,
    foto: '',
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      title: '',
      modalDescription: '',
      preco: 0,
      foto: '',
      porcao: ''
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 260) {
      return descricao.slice(0, 257) + '...'
    }
    return descricao
  }

  const getDescricaoModal = (descricao: string) => {
    if (descricao.length > 595) {
      return descricao.slice(0, 593) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.Card
        title={`Clique aqui para ver mais detalhes de: ${title}`}
        onClick={() => {
          setModal({
            isVisible: true,
            title: item.nome,
            modalDescription: getDescricaoModal(item.descricao),
            preco: item.preco,
            foto: item.foto,
            porcao: item.porcao
          })
        }}
      >
        <img src={image} alt={title} />
        <S.CardDescriptionLaDolce>
          <h3>{title}</h3>
          <S.Descricao>{getDescricao(description)}</S.Descricao>
          <Button type="carrinho" title="Mais detalhes">
            Mais detalhes
          </Button>
        </S.CardDescriptionLaDolce>
      </S.Card>

      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent>
          <S.ImgFechar>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </S.ImgFechar>

          <S.ContentProduct>
            <S.ModalImg>
              <img src={modal.foto} alt={modal.title} />
            </S.ModalImg>

            <S.ContentTextButton>
              <h3>{modal.title}</h3>

              <S.ContainerP>
                <p>{getDescricaoModal(modal.modalDescription)}</p>

                {modal.porcao.length > 8 ? (
                  <p>{`Serve: de ${modal.porcao}`}</p>
                ) : (
                  <p>{`Serve: ${modal.porcao}`}</p>
                )}
              </S.ContainerP>
              <div onClick={addToCart}>
                <Button
                  type="saibaMais"
                  title={`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}
                >
                  {`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}
                </Button>
              </div>
            </S.ContentTextButton>
          </S.ContentProduct>
        </S.ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </S.Modal>
    </>
  )
}
