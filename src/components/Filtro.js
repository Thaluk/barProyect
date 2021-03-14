import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FiltroPorPlatos } from '../actions';

const FiltroStyled = styled.select`

`



function Filtro() {
  const dispatch = useDispatch();
  const comidaSeleccionada = useSelector((state) => state.comidaSeleccionada);
  const onComidaChange = (selectEvent) => {
  const value = selectEvent.target.value;
  dispatch(FiltroPorPlatos(value))
  };

  return (
    <FiltroStyled onChange={onComidaChange} value={comidaSeleccionada}>
      <option value=''>Filtrá por plato</option>
      <option value='SandwichsMiga'>Sandwichs de miga</option>
      <option value='Gratinados'>Gratinados</option>
      <option value='SandwichsEspeciales'>Sandwichs especiales</option>
      <option value='Pizzas'>Pizzas</option>
      <option value='Papas'>Papas</option>
      <option value='Ensaladas'>Ensaladas</option>
      <option value='MilanesaAlPlato'>Milanesa al plato</option>
      <option value='LomoAlPlato'>Lomo al plato</option>
      <option value='PolloAlPlato'>Pollo al plato</option>
      <option value='Empanadas'>Empanadas</option>
      <option value='Tartas'>Tartas</option>

    </FiltroStyled>
  )
}

export default Filtro
