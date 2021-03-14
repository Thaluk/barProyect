import React from 'react'
import styled from 'styled-components'

const PlatosStyled = styled.div`
  text-align: left;
  box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
  width: 240px;
.details {
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: .3s border;
    background: #fbfbfb;
}
  h2 {
    margin: 0;
  margin-bottom: 1rem;
  font-size: 18px;}
  p {
      font-size: .9em;
      margin-bottom: .5rem;
  }
  span {
  &:after {
    content: ', ';
    }
    &:last-child {
      &:after {
        content: '.';
    }
    }
  }
    .strong {
      &:after {
        content: ' '
      }
    }

`

function Platos({nombre, precio, ingredientes, comida}) {

  return (
    <PlatosStyled>
      <div className='details'>
        <h2>{nombre}</h2>
        <p>
          <strong>Precio: </strong>
          {comida === 'SandwichsEspeciales' ? <span>Con papas: {precio.ConPapas}, Sin papas: {precio.SinPapas}</span>
          : comida === 'Papas' ? <span>Grande: {precio.grande}, Chica: {precio.chica}</span>
          : comida === 'Ensaladas' ? <span>5 ingredientes: {precio.ing5}, 3 ingredientes: {precio.ing3} </span>
          : comida === 'Pizzas' ? <span>Entera: {precio.entero} Media: {precio.medio} </span>
          : comida === 'Empanadas' ? <span>Unidad: {precio.unidad} media docena: {precio.mediaDocena} docena: {precio.docena}</span>
          : comida === 'SandwichsMiga'  ? <span>Entero: {precio.entero} Medio: {precio.medio} </span>
          : comida === 'Gratinados' ? <span>Entero: {precio.entero} Medio: {precio.medio} </span>
          : <span> {precio} </span> }
        </p>
          <p>
        {ingredientes ? <strong className='strong'>
        Ingredientes:
        </strong> : null}
        {ingredientes ? ingredientes.map((ing) => <span>{ing}</span>) : null}
        </p>
      </div>
    </PlatosStyled>
  )
}

export default Platos;
