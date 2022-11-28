import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>kupujemProdajem</h1>
      <input type='text' placeholder='Search'></input>
      <ul>
        <li>
          <Link to='/login'>Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
