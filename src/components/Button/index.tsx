import { ButtonContainer } from './styles'

export type Props = {
  type: 'saibaMais' | 'carrinho' | 'submit'
  title: string
  to?: string
  children: string
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({ type, title, children, to, disabled }: Props) => {
  return (
    <div>
      <ButtonContainer
        to={to as string}
        type={type}
        title={title}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    </div>
  )
}

export { ButtonContainer }
