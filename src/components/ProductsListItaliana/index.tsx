import { DishItaliana } from '../../models'
import { ProductItaliana } from '../ProductItaliana'
import {
  Carrinho,
  ContainerItaliana,
  ContainerList,
  ContainerRestauranteCarrinho,
  Imagem,
  Italiana,
  LaDolce,
  List,
  Restaurantes
} from './styles'

import fundoItaliana from '../../assets/images/fundoItaliana.png'
import { Header } from '../Header'

export type Props = {
  dishesMenuItaliana: DishItaliana[]
}

export const ProductsListItaliana = ({ dishesMenuItaliana }: Props) => (
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
          <ProductItaliana
            key={dish.id}
            image={dish.image}
            title={dish.title}
            description={dish.description}
          />
        ))}
      </List>
    </ContainerList>
  </ContainerItaliana>
)
