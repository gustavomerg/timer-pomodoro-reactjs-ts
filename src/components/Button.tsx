import { ButtonColor, ButtonContainer } from './Button.styles'

interface ButtonProps {
  color?: ButtonColor
}

export function Button({ color = 'primary' }: ButtonProps) {
  return <ButtonContainer color={color}>Enviar</ButtonContainer>
}
