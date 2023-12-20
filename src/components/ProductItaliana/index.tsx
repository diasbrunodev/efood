import { Button } from '../Button'

import { Card, CardDescription } from './styles'

export type Props = {
  title: string
  description: string
  image: string
}

export const ProductItaliana = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <CardDescription>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <Button type="carrinho" to="/carrinho" title="Adicionar ao carrinho">
          Adicionar ao carrinho
        </Button>
      </div>
    </CardDescription>
  </Card>
)
