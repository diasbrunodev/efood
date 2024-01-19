import { Button } from '../Button'
import { Tag } from '../Tag'

import estrela from '../../assets/images/estrela.svg'

import * as S from './styles'

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

export const StoreHome = ({
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
    <S.Card>
      <img src={image} alt={title} />

      <S.Infos>
        {destacado && <Tag>{infos.join()}</Tag>}
        <Tag>{type}</Tag>
      </S.Infos>

      <S.CardDescription>
        <S.DivTitle>
          <h3>{title}</h3>
          <S.Classification>
            <S.Note>{note}</S.Note>
            <img src={estrela} alt={title} />
          </S.Classification>
        </S.DivTitle>
        <S.DivDescription>
          <p>{getDescricao(description)}</p>
          <div>
            <Button type="saibaMais" to={`/product/${id}`} title="Saiba mais">
              Saiba mais
            </Button>
          </div>
        </S.DivDescription>
      </S.CardDescription>
    </S.Card>
  )
}
