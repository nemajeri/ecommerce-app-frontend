import React from 'react';
import axios from 'axios';
import './ProductDescription.css';

const ProductDescription = ({product: { id, title, image, price, rating, description}}) => {

  const tryCatchAxiosDelete = () => {
    try {
      axios.delete(`http://localhost:8080/api/v1/products/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='product-description'>
      <img src={require(`../../assets/samsung-monitor.jpg`)} alt='order' />
      <div className='product-description__info'>
        <h1>{title}</h1>
        <p>{rating}🌟</p>
        <hr></hr>
        <h4>Price: {price}$</h4>
        <h2>Description</h2>
        <p>{description}</p>
        <div className='flex gp'>
        <button className='btn-primary px-1' onClick={tryCatchAxiosDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
