import Loader from '../Loader'
import { StoreHome } from '../StoreHome'

import * as S from './styles'

export type Props = {
  dishesMenu?: Loja[]
  isLoading: boolean
}

export const StoreListHome = ({ dishesMenu, isLoading }: Props) => {
  const getLojaTags = (dish: Loja) => {
    const tags = []

    if (dish.destacado) {
      tags.push(`Destaque da semana`)
    }
    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.ContainerList className="container">
      <S.List>
        {dishesMenu &&
          dishesMenu.map((dish) => (
            <StoreHome
              key={dish.id}
              image={dish.capa}
              title={dish.titulo}
              note={dish.avaliacao}
              description={dish.descricao}
              type={dish.tipo}
              infos={getLojaTags(dish)}
              destacado={dish.destacado}
              id={dish.id}
            />
          ))}
      </S.List>
    </S.ContainerList>
  )
}
