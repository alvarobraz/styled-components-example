import { ButtonContainerProps, ButtonVariantColor } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariantColor
}

export function ButtonProps({ variant = 'primary' }: ButtonProps) {
  return (
    <>
    <ButtonContainerProps variant={variant}>Enviar</ButtonContainerProps>
    </>
  )
}
