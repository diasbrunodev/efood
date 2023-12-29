// import { Dish } from '../../models'
import { Loja } from '../../pages/Home'
import { ProductHome } from '../ProductHome'
import { ContainerList, List } from './styles'

export type Props = {
  dishesMenu: Loja[]
}

export const ProductsList = ({ dishesMenu }: Props) => {
  const getLojaTags = (dish: Loja) => {
    const tags = []

    if (dish.destacado) {
      tags.push(`Destaque da semana`)
    }
    return tags
  }

  return (
    <ContainerList className="container">
      <List>
        {dishesMenu.map((dish) => (
          <ProductHome
            key={dish.id}
            image={dish.capa}
            title={dish.titulo}
            note={dish.avaliacao}
            description={dish.descricao}
            type={dish.tipo}
            infos={getLojaTags(dish)}
            destacado={dish.destacado}
          />
        ))}
      </List>
    </ContainerList>
  )
}
