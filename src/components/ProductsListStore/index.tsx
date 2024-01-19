import { ProductStore } from '../ProductStore'
import Loader from '../Loader'

import * as S from './styles'

export type Props = {
  items?: CardapioItem[]
  isLoading: boolean
}

export type ModalState = {
  isVisible: boolean
  title: string
  modalDescription: string
  preco: number
  foto: string
  porcao: string
}

export const ProductsListStore = ({ items, isLoading }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
    return descricao
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.AllContainer>
        <S.ContainerList className="container">
          <S.List>
            {items &&
              items.map((produto) => (
                <S.AllCard key={produto.id}>
                  <ProductStore
                    item={produto}
                    image={produto.foto}
                    title={produto.nome}
                    description={getDescricao(produto.descricao)}
                    type={'carrinho'}
                  />
                </S.AllCard>
              ))}
          </S.List>
        </S.ContainerList>
      </S.AllContainer>
    </>
  )
}
