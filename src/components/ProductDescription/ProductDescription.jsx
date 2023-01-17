import React from 'react';
import axios from 'axios';
import './ProductDescription.css';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { decodeToken } from 'react-jwt';

const ProductDescription = ({
  product: { id, title, image, price, rating, description },
}) => {
  const navigate = useNavigate();

  const tryCatchAxiosDelete = () => {
    try {
      axios
        .delete(`http://localhost:8080/api/v1/products/${id}`);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      navigate('/');
    }, 200);
  };

  const token = localStorage.getItem('jwt');
  const decodedToken = decodeToken(token);
  const role = decodedToken.roles[0].authority;

  return (
    <div className='product-description'>
      <div onClick={() => navigate('/')} className='product-close_position'>
        <IconContext.Provider value={{ color: 'grey', className: 'icon-size' }}>
          <IoClose />
        </IconContext.Provider>
      </div>
      {image && <img src={require(`../../assets/${image}`)} alt='order' />}
      <div className='product-description__info'>
        <h1>{title}</h1>
        <p>{rating}🌟</p>
        <hr></hr>
        <h4>Price: {price}$</h4>
        <h2>Description</h2>
        <p>{description}</p>
        <div className='flex gp'>
          <button className='btn-primary px-1' onClick={tryCatchAxiosDelete}>
            {role === 'ROLE_SELLER' ? 'Delete' : 'Buy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
