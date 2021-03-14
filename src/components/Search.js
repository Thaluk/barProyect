import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FiltroPorNombre } from '../actions'
import Input from './input'

const SearchStyled = styled.div`

`

function Search() {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch(FiltroPorNombre(e.target.value))
  }
  return (
    <SearchStyled>
      <Input placeholder='Buscá por nombre...' value={inputValue} onChange={filterByName} />
    </SearchStyled>
  )
}

export default Search
