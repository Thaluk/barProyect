import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Platos from './Platos';

const ListaplatosStyled = styled.div`
display: grid;
grid-row-gap: 2.3em;
grid-auto-flow: columns;
grid-column-gap: 50px;
grid-template-columns: repeat(auto-fill, 264px);
background: var(--white);
justify-content: center;
justify-items: space-between;
margin-top: .8em;
`;

function Listaplatos() {
  const menuList = useSelector((state) => {
  if('' !== state.comidaSeleccionada){ return state.menuFiltradoPorComida};
    return state.menu;
  })
  return (
    <ListaplatosStyled>
       {
      menuList.map(
        ({ nombre, ingredientes, precio, comida, key }) => {
          return (
          <Platos
            key={key}
            nombre={nombre}
            ingredientes={ingredientes}
            precio={precio}
            comida={comida}
          />
        )
        })
      }
    </ListaplatosStyled>
  )
}

export default Listaplatos;
