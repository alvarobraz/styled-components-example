import { ButtonContainerTheme, ButtonVariantColor } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariantColor
}

export function ButtonTheme({ variant = 'primary' }: ButtonProps) {
  return (
    <>
    <ButtonContainerTheme variant={variant}>Enviar</ButtonContainerTheme>
    </>
  )
}
