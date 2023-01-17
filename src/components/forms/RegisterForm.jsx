import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const RegisterForm = ({ handleClick }) => {
  const navigate = useNavigate();
  async function register(username, email, password, role) {
    try {
      const body = JSON.stringify({
        username,
        email,
        password,
        role,
      });
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/register',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  return (
    <div className='container'>
      <div className='form'>
        <div className='form_inputs'>
          <h1>Create Account</h1>
          <div className='flex-column'>
            <label>Your name</label>
            <input type='text' placeholder='Name' id='username' />
          </div>
          <div className='flex-column'>
            <label>Email</label>
            <input type='email' placeholder='Email' id='email' />
          </div>
          <div className='flex-column'>
            <label>Password</label>
            <input type='password' placeholder='Password' id='password' />
          </div>
          <div className='flex-column'>
            <label>You are registering as: </label>
            <select name='Role' id='role'>
              <option value='ROLE_BUYER'>Buyer</option>
              <option value='ROLE_SELLER'>Seller</option>
            </select>
          </div>
        </div>
        <button
          className='btn-block'
          onClick={() => {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const roleSelection = document.getElementById('role');
            const role = roleSelection.value;
            register(username, email, password, role).then((result) => {
              if (result) {
                handleClick();
                setTimeout(() => {
                  navigate('/login', { replace: true });
                }, 300);
              } else {
                alert('Registering unsuccesful! User with same credentials already exists. Please try using different credentials.');
              }
            });
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
