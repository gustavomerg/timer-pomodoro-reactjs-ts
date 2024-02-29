import { BoxColor, BoxContainer } from './Box.styles'

interface BoxProps {
  variant?: BoxColor
}

export function Box({ variant = 'primary' }: BoxProps) {
  return <BoxContainer variant={variant} />
}
