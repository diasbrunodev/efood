import { Span, TagContainer } from './styles'

export type Props = {
  type?: 'italiana' | 'destaque'
  children: string
}

export const Tag = ({ children, type = 'italiana' }: Props) => (
  <Span>
    <TagContainer type={type}>{children}</TagContainer>
  </Span>
)
