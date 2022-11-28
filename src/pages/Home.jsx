import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Subbar from '../layout/Subbar';
import Product from '../components/Product/Product';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Subbar />
      <img
        className='background'
        src={require('../assets/amazon-wallpaper.jpeg')}
        alt='amazon-background'
      />
      <div className='container'>
        <Link to='/add-product'>
          <button className='btn my-1'>Add New Product</button>
        </Link>
        <div className='grid-3'>
          {products.map((product, i) => {
            return (
              <Product
                key={i}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
