import React from 'react';
import './BuyNow.css';

const BuyNow = () => {
  return (
    <div className='buynow'>
      <div className='buynow__info'>
        <p>Price Summary</p>
        <p className='buynow__price'>
          <small>$</small>
          <strong>500</strong>
        </p>
      </div>
      <button>Procced with payment</button>
    </div>
  );
};

export default BuyNow;
