import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi'; 
import axios from 'axios';
import '../App.css';
import { IconContext } from "react-icons";

const Navbar = ({ loadProductsAccordingToSearchResult, toggleUserMenu }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = async (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if(e.key === 'Enter'){
        try {
          const response = await axios.get(
            `http://localhost:8080/api/v1/products/search?searchTerm=${inputValue}`
          );
          loadProductsAccordingToSearchResult(response.data)
        } catch (error) {
          console.error(error);
        }
    }
  };

  return (
    <nav className='navbar'>
      <h1>kupujemProdajem</h1>
      <input
        type='text'
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        value={inputValue}
        placeholder='Search'
      />
      <ul>
        <li onClick={toggleUserMenu}>
        <IconContext.Provider value={{ color: "white", className: "icon-size" }}>
          <FiUser/>
          </IconContext.Provider>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
