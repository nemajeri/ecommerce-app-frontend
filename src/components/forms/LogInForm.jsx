import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const LogInForm = () => {
  return (
    <div className='container'>
      <div className='form'>
        <div className='form_inputs'>
          <h1>Log In</h1>
          <div className='flex-column'>
            <label>Email</label>
            <input type='email' placeholder='Email' />
          </div>
          <div className='flex-column'>
            <label>Password</label>
            <input type='password' placeholder='Password' />
          </div>
        </div>
        <button className='btn-block'>Log In</button>
        <p>New to KupujemProdajem?</p>
        <button className='btn-block'>
          <Link to='/register'>Register</Link>
        </button>
      </div>
    </div>
  );
};

export default LogInForm;
