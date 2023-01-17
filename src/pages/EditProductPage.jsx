import React from 'react';
import EditProductForm from '../components/forms/EditProductForm';
import { useParams } from 'react-router-dom';

const EditProductPage = () => {
    const { id } = useParams();
  return (
    <>
    <div className='container flex-center'>
      <EditProductForm id={id}/>
    </div>
  </>
  )
}

export default EditProductPage