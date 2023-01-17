import React, { useEffect } from 'react';
import EditUserForm from '../components/forms/EditUserForm';
import { isExpired, decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';


const UserDetailsPage = () => {
    const token = localStorage.getItem('jwt');
    const decodedToken = decodeToken(token);
    const username = decodedToken.sub;

    const navigate = useNavigate();

    useEffect(() => {
        if(isExpired(token)) {
            navigate('/login');
        }
    }, [navigate])
  return (
    <>
    <div className='container flex-center'>
      <EditUserForm username={username}/>
    </div>
  </>
  )
}

export default UserDetailsPage