import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const Modal = ({ show }) => {
  return show ? (
    <div className='container'>
      <div className='card'>
        <div className='all-center'>
          <h2>Account Created!</h2>
          <IconContext.Provider value={{ color: 'green', size: '50px' }}>
            <FaCheckCircle />
          </IconContext.Provider>
          <p>
            Go to <Link to='/'>Homepage</Link>
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
