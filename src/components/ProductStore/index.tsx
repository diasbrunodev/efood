import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Card,
  CardDescriptionLaDolce,
  ContainerP,
  ContentProduct,
  ContentTextButton,
  Descricao,
  ImgFechar,
  Modal,
  ModalContent,
  ModalImg
} from './styles'
import { Button } from '../Button'
import fechar from '../../assets/images/fechar.png'
import { ModalState } from '../ProductsListStore'
import { CardapioItem } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

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

export const ProductItaliana = ({ image, title, description, item }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    dispatch(open())
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
      <Card
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
        <CardDescriptionLaDolce>
          <h3>{title}</h3>
          <Descricao>{getDescricao(description)}</Descricao>
          <Button type="carrinho" title="Mais detalhes">
            Mais detalhes
          </Button>
        </CardDescriptionLaDolce>
      </Card>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <ImgFechar>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </ImgFechar>

          <ContentProduct>
            <ModalImg>
              <img src={modal.foto} alt={modal.title} />
            </ModalImg>

            <ContentTextButton>
              <h3>{modal.title}</h3>

              <ContainerP>
                <p>{getDescricaoModal(modal.modalDescription)}</p>

                {modal.porcao.length > 8 ? (
                  <p>{`Serve: de ${modal.porcao}`}</p>
                ) : (
                  <p>{`Serve: ${modal.porcao}`}</p>
                )}
              </ContainerP>
              <div onClick={addToCart}>
                <Button
                  type="saibaMais"
                  title={`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}
                >
                  {`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}
                </Button>
              </div>
            </ContentTextButton>
          </ContentProduct>
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}
