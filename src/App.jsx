import './App.css';
import {
  Home,
  ProductPage,
  Login,
  Register,
  AddProductPage,
  EditProductPage
} from './pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-desc/:id' element={<ProductPage />} />
        <Route path='/products/:id' element={<EditProductPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-product' element={<AddProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
