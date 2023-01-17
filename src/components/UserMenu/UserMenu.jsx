import React from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';

const UserMenu = ({ username, navigate }) => {
  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 200);
  };

  return (
    <div className='user-menu'>
      <div className='user-menu-dropdown'>
        <ul>
          <li>
            <a href='/' id='username'>
              Hello, {username}!
            </a>
          </li>
          <li>
            <Link to='/user-details'>
              User Settings
            </Link>
          </li>
          <li>
            <Link to='/login' onClick={handleLogOut}>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
