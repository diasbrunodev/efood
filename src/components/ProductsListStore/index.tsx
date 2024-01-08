import { ProductItaliana } from '../ProductStore'
import { AllCard, AllContainer, ContainerList, List } from './styles'

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
  const getDescricao = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
    return descricao
  }

  return (
    <>
      <AllContainer>
        <ContainerList className="container">
          <List>
            {items.map((produto) => (
              <AllCard key={produto.id}>
                <ProductItaliana
                  item={produto}
                  image={produto.foto}
                  title={produto.nome}
                  description={getDescricao(produto.descricao)}
                  type={'carrinho'}
                />
              </AllCard>
            ))}
          </List>
        </ContainerList>
      </AllContainer>
    </>
  )
}
