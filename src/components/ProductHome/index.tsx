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
  description: string[]
  note: number
  image: string
  infos: string[]
}

export const ProductHome = ({
  image,
  title,
  note,
  description,
  infos
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
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
        {description.map((phrase) => (
          <p key={phrase}>{phrase}</p>
        ))}
        <div>
          <Button type="saibaMais" to="/italiana" title="Saiba mais">
            Saiba mais
          </Button>
        </div>
      </DivDescription>
    </CardDescription>
  </Card>
)
