import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.label`

`

function Input(props) {
  return (
    <InputStyled>
      <input type='text' {...props}/>
    </InputStyled>
  )
}

export default Input
