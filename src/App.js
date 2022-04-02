import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import cartReducer from './cartReducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AddCart from './AddCart';
import Itemslist from './Itemslist';
function App() {
  const store = createStore(cartReducer)
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <AddCart />
        <Itemslist />


      </Provider>
    </div>
  );
}

export default App;
