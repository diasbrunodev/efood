import { Button } from '../Button'
import { Tag } from '../Tag'

import estrela from '../../assets/images/estrela.svg'
import {
  Card,
  CardDescription,
  Classification,
  DivDescription,
  DivTitle,
  Infos,
  Note
} from './styles'

export type Props = {
  title: string
  description: string
  note: number
  image: string
  type: string
  infos: string[]
  destacado: boolean
  id: number
}

export const ProductHome = ({
  image,
  title,
  note,
  description,
  type,
  infos,
  destacado,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 245) {
      return descricao.slice(0, 242) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt={title} />

      <Infos>
        {destacado && <Tag>{infos.join()}</Tag>}
        <Tag>{type}</Tag>
      </Infos>

      <CardDescription>
        <DivTitle>
          <h3>{title}</h3>
          <Classification>
            <Note>{note}</Note>
            <img src={estrela} alt={title} />
          </Classification>
        </DivTitle>
        <DivDescription>
          <p>{getDescricao(description)}</p>
          <div>
            <Button type="saibaMais" to={`/product/${id}`} title="Saiba mais">
              Saiba mais
            </Button>
          </div>
        </DivDescription>
      </CardDescription>
    </Card>
  )
}
