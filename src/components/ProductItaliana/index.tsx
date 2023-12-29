import { Card, CardDescriptionLaDolce, Descricao } from './styles'
import { Button } from '../Button'

export type Props = {
  title: string
  description: string
  image: string
}

export const ProductItaliana = ({ image, title, description }: Props) => {
  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <CardDescriptionLaDolce>
          <h3>{title}</h3>
          <Descricao>{description}</Descricao>
          <Button type="carrinho" to="/carrinho" title="Adicionar ao carrinho">
            Adicionar ao carrinho
          </Button>
        </CardDescriptionLaDolce>
      </Card>
    </>
  )
}
