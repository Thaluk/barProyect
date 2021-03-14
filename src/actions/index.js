export function FiltroPorPlatos (comidaSeleccionada) {
  return {
  type: 'FILTER_BY_COMIDA',
  payload: {comidaSeleccionada},
  }
}