import { ButtonContainer } from './styles'

export type Props = {
  type: 'saibaMais' | 'carrinho'
  title: string
  to?: string
  children: string
}

export const Button = ({ type, title, children, to }: Props) => (
  <div>
    <ButtonContainer to={to as string} type={type} title={title}>
      {children}
    </ButtonContainer>
  </div>
)
