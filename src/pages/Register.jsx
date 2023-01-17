import React, { useState } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import Modal from '../components/utils/Modal';

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  const element = 'Account';

  const handleClick = () => {
    setShowModal(true);
}

  return (
    <div className='flex-column'>
      <RegisterForm  handleClick={handleClick}/>
      <Modal show={showModal} element={element}/>
    </div>
  );
};

export default Register;
