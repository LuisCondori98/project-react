import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Index from './components/pages/index/Index';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Servicios from './components/pages/Servicios/Servicios';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/productos" element={<ItemListContainer greeting={"Todos los productos"} />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos filtrados"} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer /> }/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
