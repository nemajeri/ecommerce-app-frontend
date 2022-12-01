import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ id, title, image, price, rating }) => {
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
      <Link to={`/product-desc/${id}`}><button className='btn'>Description</button></Link>
      <Link to={`/products/${id}`}><button className='btn-light product__edit-button'>
          <p className='text-primary'>Edit</p>
        </button>
        </Link>
        </div>
    </div>
  );
};

export default Product;
