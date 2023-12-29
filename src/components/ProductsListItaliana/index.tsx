import { useState } from 'react'
import { DishItaliana } from '../../models'
import { ProductItaliana } from '../ProductItaliana'
import {
  Carrinho,
  ContainerItaliana,
  ContainerList,
  ContainerP,
  ContainerRestauranteCarrinho,
  ContentProduct,
  ContentTextButton,
  Imagem,
  ImgFechar,
  Italiana,
  LaDolce,
  List,
  Modal,
  ModalContent,
  Restaurantes
} from './styles'

import fundoItaliana from '../../assets/images/fundoItaliana.png'
import fechar from '../../assets/images/fechar.png'
import imagemModal from '../../assets/images/image_modal.png'
import { Header } from '../Header'
import { Button } from '../Button'
import { Footer } from '../Footer'

export type Props = {
  dishesMenuItaliana: DishItaliana[]
}

type ModalState = {
  isVisible: boolean
  title: string
  modalDescription: string[]
  preco: number
}

export const ProductsListItaliana = ({ dishesMenuItaliana }: Props) => {
  const [modalTitle, setModalTitle] = useState('')
  const [modaldescription, setModalDescription] = useState([''])
  const [modalPreco, setModalPreco] = useState<number>()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    title: '',
    modalDescription: [''],
    preco: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      title: '',
      modalDescription: [''],
      preco: 0
    })
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <ContainerItaliana>
      <Header />

      <ContainerRestauranteCarrinho>
        <Restaurantes>
          <p>Restaurantes</p>
        </Restaurantes>
        <Carrinho>
          <p>0 produto(s) no carrinho</p>
        </Carrinho>
      </ContainerRestauranteCarrinho>
      <Imagem style={{ backgroundImage: `url(${fundoItaliana})` }}>
        <Italiana>
          <p>Italiana</p>
        </Italiana>
        <LaDolce>
          <p>La Dolce Vita Trattoria</p>
        </LaDolce>
      </Imagem>
      <ContainerList className="container">
        <List>
          {dishesMenuItaliana.map((dish) => (
            <li
              key={dish.id}
              onClick={() => {
                setModalTitle(dish.title)
                setModalDescription(dish.descriptionModal)
                setModalPreco(dish.preco)
                setModal({
                  isVisible: true,
                  title: dish.title,
                  modalDescription: dish.descriptionModal,
                  preco: dish.preco
                })
              }}
            >
              <ProductItaliana
                image={dish.image}
                title={dish.title}
                description={dish.description}
              />
            </li>
          ))}
        </List>
      </ContainerList>

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
            <div>
              <img src={imagemModal} />
            </div>
            <ContentTextButton>
              <h3>{modalTitle}</h3>
              <ContainerP>
                {modaldescription.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </ContainerP>
              <Button
                type="saibaMais"
                to="/carrinho"
                // title="Adicionar ao carrinho - R$ 60,90"
                title={`Adicionar ao carrinho - ${formataPreco(modalPreco)}`}
              >
                {`Adicionar ao carrinho - ${formataPreco(modalPreco)}`}
              </Button>
            </ContentTextButton>
          </ContentProduct>
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>

      <Footer />
    </ContainerItaliana>
  )
}
