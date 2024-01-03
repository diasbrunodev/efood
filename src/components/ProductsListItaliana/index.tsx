import { useState } from 'react'
import { ProductItaliana } from '../ProductItaliana'
import {
  AllCard,
  AllContainer,
  ContainerList,
  ContainerP,
  ContentProduct,
  ContentTextButton,
  ImgFechar,
  List,
  Modal,
  ModalContent,
  ModalImg
} from './styles'

import fechar from '../../assets/images/fechar.png'
import { Button } from '../Button'
import { Footer } from '../Footer'
import { CardapioItem } from '../../pages/Home'

export type Props = {
  items: CardapioItem[]
}

export type ModalState = {
  isVisible: boolean
  title: string
  modalDescription: string
  preco: number
  foto: string
  porcao: string
}

export const ProductsListItaliana = ({ items }: Props) => {
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

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
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
      <AllContainer>
        <ContainerList className="container">
          <List>
            {items.map((produto) => (
              <AllCard
                key={produto.id}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    title: produto.nome,
                    modalDescription: getDescricaoModal(produto.descricao),
                    preco: produto.preco,
                    foto: produto.foto,
                    porcao: produto.porcao
                  })
                }}
              >
                <ProductItaliana
                  image={produto.foto}
                  title={produto.nome}
                  description={getDescricao(produto.descricao)}
                  type={'carrinho'}
                />
              </AllCard>
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
              <ModalImg>
                <img src={modal.foto} alt={modal.title} />
              </ModalImg>

              <ContentTextButton>
                <h3>{modal.title}</h3>

                <ContainerP>
                  <p>{modal.modalDescription}</p>

                  {modal.porcao.length > 8 ? (
                    <p>{`Serve: de ${modal.porcao}`}</p>
                  ) : (
                    <p>{`Serve: ${modal.porcao}`}</p>
                  )}
                </ContainerP>

                <Button
                  type="saibaMais"
                  to="/carrinho"
                  title={`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}
                >
                  {`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}
                </Button>
              </ContentTextButton>
            </ContentProduct>
          </ModalContent>
          <div onClick={() => closeModal()} className="overlay"></div>
        </Modal>
      </AllContainer>

      <Footer />
    </>
  )
}
