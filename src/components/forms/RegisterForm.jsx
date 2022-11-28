import React from 'react';
import './Form.css';

const RegisterForm = ({ onClick }) => {
  return (
    <div className='container'>
      <div className='form'>
        <div className='form_inputs'>
          <h1>Create Account</h1>
          <div className='flex-column'>
            <label>Your name</label>
            <input type='text' placeholder='Name' />
          </div>
          <div className='flex-column'>
            <label>Email</label>
            <input type='email' placeholder='Email' />
          </div>
          <div className='flex-column'>
            <label>Password</label>
            <input type='password' placeholder='Password' />
          </div>
        </div>
        <button className='btn-block' onClick={onClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
