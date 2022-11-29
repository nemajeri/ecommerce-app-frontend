import React, { useState } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import Modal from '../components/utils/Modal';

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  const element = 'Account';

  return (
    <div className='flex-column'>
      <RegisterForm onClick={() => setShowModal(true)} />
      <Modal show={showModal} element={element}/>
    </div>
  );
};

export default Register;
