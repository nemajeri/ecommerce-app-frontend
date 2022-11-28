import React from 'react';
import Navbar from '../layout/Navbar';
import Order from '../components/Order/Order';
import BuyNow from '../components/BuyNow/BuyNow';
import '../App.css';

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className='container flex-center'>
        <div className='flex-column cart-page-order-items'>
          <Order />
          <Order />
        </div>
        <BuyNow />
      </div>
    </>
  );
};

export default Cart;
