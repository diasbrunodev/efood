import { TagContainer } from './styles'

export type Props = {
  type?: 'italiana' | 'destaque'
  children: string
}

export const Tag = ({ children, type = 'italiana' }: Props) => (
  <TagContainer type={type}>{children}</TagContainer>
)
