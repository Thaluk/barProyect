export function FiltroPorPlatos (comidaSeleccionada) {
  return {
  type: 'FILTER_BY_COMIDA',
  payload: {comidaSeleccionada},
  }
}

export function FiltroPorNombre (payload) {
  return {
    type: 'FILTER_BY_NAME',
    payload: payload
  }
}