import React from 'react';
import './Product.css';

const Product = ({ title, image, price, rating }) => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          <p>{rating}🌟</p>
        </div>
      </div>

      <img src={require(`../../assets/${image}`)} alt='product' />
      <div className='flex gp'>
        <button className='btn'>Description</button>
        <button className='btn-primary px-1'>Delete</button>
        <button className='btn-light px-1'>
          <p className='text-primary'>Edit</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
