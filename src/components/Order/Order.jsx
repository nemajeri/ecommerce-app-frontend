import React from 'react';
import './Order.css';

const Order = () => {
  return (
    <div className='order'>
      <img src={require(`../../assets/samsung-monitor.jpg`)} alt='order' />
      <div className='order__info'>
        <p>Price</p>
        <p className='order__price'>
          <small>$</small>
          <strong>5000</strong>
        </p>
        <div className='order__quantity'>
          <p>Quantity</p>
          <button> + </button>
          <strong>1</strong>
          <button> - </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
