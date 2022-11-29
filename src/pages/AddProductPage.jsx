import React from 'react';
import AddProductForm from '../components/forms/AddProductForm';
import Navbar from '../layout/Navbar';
import Modal from '../components/utils/Modal'

const AddProductPage = () => {

  const element = 'Product';

  return (
    <>
      <Navbar />
      <div className='container flex-center'>
        <AddProductForm />
        <Modal element={element}/>
      </div>
    </>
  );
};

export default AddProductPage;
