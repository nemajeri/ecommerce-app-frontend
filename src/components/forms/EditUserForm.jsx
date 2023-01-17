import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoClose } from 'react-icons/io5';
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import './Form.css'

const EditUserForm = ({ username }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: { roleName: '' }
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/user/${username}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.patch(`http://localhost:8080/api/v1/user/update-user`, {
        username: user.username,
        email: user.email,
        password: user.password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      setTimeout(() => {
        navigate("/");
      }, 200)
    } catch(error) {
      alert(error);
    }
  }

  const returnRole = () => {
    const roleName = user.role.roleName;
    let role = '';

    if(roleName.endsWith('BUYER')) {
      role = 'Buyer';
    } else {
      role = 'Seller';
    }

    return role;
  }

  return (
    <div className='container user-details'>
    <form className='form' onSubmit={handleSubmit}>
    <div onClick={()=>navigate("/")}>
      <IconContext.Provider value={{ color: "grey", className: "icon-size" }}>
        <IoClose/>
        </IconContext.Provider>
        </div>
        <h1>Your Settings</h1>
      <label>
        Username:
        <input type="text" name="username" defaultValue={user.username.toString()} disabled />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={user.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={user.password} onChange={handleChange} />
      </label>
      <br />
      <label>
      Role:
        <input type="text" name="role" defaultValue={returnRole()} disabled />
      </label>
      <br />
      <button type='submit' className='btn'>Submit Changes</button>
      </form>
      </div>
      );
  }

export default EditUserForm;
