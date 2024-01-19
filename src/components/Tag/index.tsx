import * as S from './styles'

export type Props = {
  type?: 'italiana' | 'destaque'
  children: string
}

export const Tag = ({ children, type = 'italiana' }: Props) => (
  <S.Span>
    <S.TagContainer type={type}>{children}</S.TagContainer>
  </S.Span>
)
