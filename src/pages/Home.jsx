import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Subbar from '../layout/Subbar';
import AddProductForm from '../components/forms/AddProductForm';
import useToggle from '../components/utils/hooks/useToggle';
import Portal from '../components/utils/Portal';
import Product from '../components/Product/Product';
import UserMenu from '../components/UserMenu/UserMenu';
import { isExpired, decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isToggled, toggle] = useToggle();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem('jwt');
  const decodedToken = token ? decodeToken(token) : null;
  const username = decodedToken ? decodedToken.sub : null;
  const role = decodedToken ? decodedToken.roles[0].authority : null;

  useEffect(() => {
    getAllProducts();
    if(isExpired(token) || !token) {
      setIsAuthenticated(false);
      navigate('/login')
    }
    const portalRoot = document.createElement('div');
    document.body.appendChild(portalRoot);

    return () => {
      document.body.removeChild(portalRoot);
    };
    
  }, [navigate, isFormVisible, isAuthenticated]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadProductsAccordingToSearchResult = (searchResult) => {
    setProducts(searchResult);
  };

  const closeForm = () => {
    setTimeout(() => {
      setIsFormVisible(false);
    }, 200)
  };

  const toggleUserMenu = () => {
    toggle();
  };

  return (
    <div className={isFormVisible ? 'portal_background' : ''}>
      <Navbar
        loadProductsAccordingToSearchResult={
          loadProductsAccordingToSearchResult
        }
        toggleUserMenu={toggleUserMenu}
      />
      <Subbar />
      {isToggled && <UserMenu username={username} navigate={navigate}/>}
      <img
        className='background'
        src={require('../assets/amazon-wallpaper.jpeg')}
        alt='amazon-background'
      />
      <div className='container'>
       { role === 'ROLE_SELLER' ? (<button className='btn my-1' onClick={() => setIsFormVisible(true)}>
          Add New Product
        </button>) : null}
        {isFormVisible ? (
          <Portal>
            <div className='portal_form'>
              <AddProductForm 
              closeForm={closeForm} 
              />
            </div>
          </Portal>
        ) : null}
        <div className='grid-3'>
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
                role={role}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
