import { Dish } from '../../models'
import { ProductHome } from '../ProductHome'
import { ContainerList, List } from './styles'

export type Props = {
  dishesMenu: Dish[]
}

export const ProductsList = ({ dishesMenu }: Props) => (
  <ContainerList className="container">
    <List>
      {dishesMenu.map((dish) => (
        <ProductHome
          key={dish.id}
          image={dish.image}
          title={dish.title}
          note={dish.note}
          description={dish.description}
          infos={dish.infos}
        />
      ))}
    </List>
  </ContainerList>
)
