import styled from 'styled-components'

export type BoxColor = 'primary' | 'secondary' | 'danger' | 'success'

interface BoxContainerProps {
  variant: BoxColor
}

const boxColors = {
  primary: 'green',
  secondary: 'aquamarine',
  danger: 'red',
  success: 'greenyellow',
}

export const BoxContainer = styled.div<BoxContainerProps>`
  width: 100px;
  height: 100px;
  border: 1px solid black;

  background-color: ${(props) => props.theme['green-500']};

  /*   background-color: ${(props) => {
    return boxColors[props.variant]
  }}; */
`
