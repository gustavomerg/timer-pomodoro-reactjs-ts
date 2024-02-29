import styled, { css } from 'styled-components'

export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  color: ButtonColor
}

const buttonColors = {
  primary: 'aqua',
  secondary: 'aquamarine',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${(props) => {
    return css`
      background-color: ${buttonColors[props.color]};
    `
  }}
`
