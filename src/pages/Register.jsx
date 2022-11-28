import React, { useState } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import Modal from '../components/utils/Modal';

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='flex-column'>
      <RegisterForm onClick={() => setShowModal(true)} />
      <Modal show={showModal} />
    </div>
  );
};

export default Register;
