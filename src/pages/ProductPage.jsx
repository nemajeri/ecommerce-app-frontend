import React from 'react';
import Navbar from '../layout/Navbar';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import '../App.css';

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <ProductDescription />
      </div>
    </>
  );
};

export default ProductPage;
