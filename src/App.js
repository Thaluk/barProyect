import { Provider } from 'react-redux';
import './App.css';
import Filtro from './components/Filtro';
import Listaplatos from './components/ListaPlatos';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Filtro/>
      <Listaplatos></Listaplatos>
    </div>
    </Provider>
  );
}

export default App;
