import axios from 'axios';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';

const AddProductForm = ({ id }) => {
  const [input, setInput] = useState({
    title: '',
    price: '',
    rating: '',
    image: '',
    description: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/v1/products/${id}`, input,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      } )
      .catch((err) => console.log(err));
      setTimeout(() => {
        navigate('/');
      }, 200);
  };

  const onChange = (e) => {
    const { name, type, value } = e.target;
    if(name === 'file') {
    setSelectedFile(e.target.files[0])
    setInput((input) => {
      return { ...input, image: e.target.files[0].name };
    });} else {
    setInput((input) => {
      const nextInput = { ...input };

      switch (type) {
        case 'number':
          nextInput[name] = Number(value);
          break;
        default:
          nextInput[name] = value;
      }
      return nextInput;
    });
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
      <div onClick={()=>navigate("/")}>
      <IconContext.Provider value={{ color: "grey", className: "icon-size" }}>
        <IoClose/>
        </IconContext.Provider>
        </div>
        <div className='form_inputs'>
          <h1>Edit Product</h1>
          <div className='flex-column'>
            <label>Add new title</label>
            <input
              type='text'
              value={input.title}
              onChange={onChange}
              name='title'
              placeholder='Title'
            />
          </div>
          <div className='flex-column'>
            <label>Add new price</label>
            <input
              type='number'
              value={input.price}
              onChange={onChange}
              name='price'
              placeholder='Price'
            />
          </div>
          <div className='flex-column'>
            <label>Add new rating</label>
            <input
              type='number'
              value={input.rating}
              onChange={onChange}
              name='rating'
              placeholder='Rating'
            />
          </div>
          <div className='flex-column'>
            <label>Add new image</label>
            <input
              type='file'
              onChange={onChange}
              name='file'
              placeholder='Image'
            />
          </div>
          <div className='flex-column'>
            <label>Add new description</label>
            <input
              type='text'
              value={input.description}
              onChange={onChange}
              name='description'
              placeholder='Description'
            />
          </div>
        </div>
        <button className='btn-block' type='submit'>
          Edit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
