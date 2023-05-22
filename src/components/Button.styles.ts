import styled, { css } from 'styled-components'

export type ButtonVariantColor = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariantColor
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainerTheme = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

`

export const ButtonContainerProps = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`
