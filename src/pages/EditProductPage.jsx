import React from 'react';
import EditProductForm from '../components/forms/EditProductForm';
import Navbar from '../layout/Navbar';
import { useParams } from 'react-router-dom';
// import Modal from '../components/utils/Modal'

const EditProductPage = () => {
    const { id } = useParams();
  return (
    <>
    <Navbar />
    <div className='container flex-center'>
      <EditProductForm id={id}/>
    </div>
  </>
  )
}

export default EditProductPage