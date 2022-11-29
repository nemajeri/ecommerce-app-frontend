import './App.css';
import { Home, ProductPage, Login, Register, AddProductPage } from './pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<ProductPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-product' element={<AddProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
