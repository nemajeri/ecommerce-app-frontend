import React from 'react';
import './ProductDescription.css';

const ProductDescription = () => {
  return (
    <div className='product-description'>
      <img src={require(`../../assets/samsung-monitor.jpg`)} alt='order' />
      <div className='product-description__info'>
        <h1>Samsung Galaxy Smart Tv 5550 X</h1>
        <p>3🌟</p>
        <hr></hr>
        <h4>Price: 25000$</h4>
        <h2>Description</h2>
        <p>Some description here</p>
        <div className='flex gp'>
        <button className='btn-primary px-1'>Delete</button>
        <button className='btn-light px-1'>
          <p className='text-primary'>Edit</p>
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
