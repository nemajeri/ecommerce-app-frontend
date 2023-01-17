import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LogInForm = () => {
  async function login(username, password) {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/login',
        JSON.stringify({
          username,
          password,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      const token = response.data;
      localStorage.setItem('jwt', token);
      return true;
    } catch (error) {
      alert(error);
      return false;
    }
  }
  

  return (
    <div className='container'>
      <div className='form'>
        <div className='form_inputs'>
          <h1>Log In</h1>
          <div className='flex-column'>
            <label>Username</label>
            <input type='text' placeholder='Username' id='username'/>
          </div>
          <div className='flex-column'>
            <label>Password</label>
            <input type='password' placeholder='Password' id='password'/>
          </div>
        </div>
        <button
          className='btn block'
          onClick={() => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            login(username, password).then((result) => {
               if (result) {
                 window.location.href = '/';
               } else {
                 console.log('Login unsuccesful!');
               }
            });
          }}
        >
          Log In
        </button>
        <p>New to KupujemProdajem?</p>
        <button className='btn-block'>
          <Link to='/register'>Register</Link>
        </button>
        <p className='guide'><strong>Important:</strong> After registering you will be redirected to login.</p>
      </div>
    </div>
  );
};

export default LogInForm;
