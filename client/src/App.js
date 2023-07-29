import './App.css';
import Filter from './Components/Filter';
import CartPage from './Pages/CartPage';
import ProductPage from './Pages/ProductPages';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
