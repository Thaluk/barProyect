import Menu from '../data';

const initialState = {
  menu: Menu,
  menuFiltradoPorComida: [],
  menuFiltradoPorNombre: [],
  filtradoPorNombre: false,
  comidaSeleccionada: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_MENU':
    return { ...state, menu: action.payload };

  case 'FILTER_BY_COMIDA':
    const { comidaSeleccionada } = action.payload;
    if ('' === comidaSeleccionada) {
      return {...state, menuFiltradoPorNombre: [], comidaSeleccionada: '',};
    }
    const menuFiltradoPorComida = state.menu.filter((comida) => comida.comida === comidaSeleccionada)
    return {...state, menuFiltradoPorComida, comidaSeleccionada: comidaSeleccionada}

  case 'FILTER_BY_NAME':
    const menuFiltradoPorNombre = state.menu.filter((nombre) => nombre.nombre.toLowerCase().includes(action.payload.toLowerCase()))
    return {...state, menuFiltradoPorComida: [], comidaSeleccionada: '', menuFiltradoPorNombre, filtradoPorNombre: true}

  default:
    return state;
  }
}

export default reducer;