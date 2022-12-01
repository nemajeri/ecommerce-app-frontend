import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();    
  },[id]);
  
  const getProduct = async () => {
    try {
      const response = await axios
      .get(`http://localhost:8080/api/v1/products/${id}`)
        setProduct(response.data);
      } catch (error){
        console.log(error);
      } 
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <ProductDescription product={product}/>
      </div>
    </>
  );
};

export default ProductPage;
