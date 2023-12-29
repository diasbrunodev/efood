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
}

export const ProductHome = ({
  image,
  title,
  note,
  description,
  type,
  infos,
  destacado
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 196) {
      return descricao.slice(0, 193) + '...'
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
            <Button type="saibaMais" to="/italiana" title="Saiba mais">
              Saiba mais
            </Button>
          </div>
        </DivDescription>
      </CardDescription>
    </Card>
  )
}
