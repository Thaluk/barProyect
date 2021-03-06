import { Provider } from 'react-redux';
import './App.css';
import Filtro from './components/Filtro';
import Listaplatos from './components/ListaPlatos';
import Search from './components/Search';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Search/>
      <Filtro/>
      <Listaplatos></Listaplatos>
    </div>
    </Provider>
  );
}

export default App;
