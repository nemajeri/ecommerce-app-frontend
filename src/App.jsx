import './App.css';
import {
  Home,
  ProductPage,
  Login,
  Register,
  EditProductPage,
  UserDetailsPage
} from './pages/index';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/user-details' element={<UserDetailsPage />}/>
        <Route exact path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/product-desc/:id' element={<ProductPage />} />
        <Route path='/products/:id' element={<EditProductPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Navigate to='/'/> }/>
      </Routes>
    </Router>
  );
}

export default App;
