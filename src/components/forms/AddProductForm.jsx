import axios from 'axios';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { IconContext } from "react-icons";

const AddProductForm = ({ closeForm }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [input, setInput] = useState({
    title: '',
    price: '',
    rating: '',
    image: '',
    description: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/v1/products/add-product', input)
      .catch((err) => console.error(err));
      closeForm()
  };

  const onChange = (e) => {
    const { name, type, value } = e.target;
    if (name === 'file') {
      setSelectedFile(e.target.files[0]);
      setInput((input) => {
        return { ...input, image: e.target.files[0].name };
      });
    } else {
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
    <div className='container' >
      <form className='form' onSubmit={handleSubmit}>
        <div onClick={closeForm}>
      <IconContext.Provider value={{ color: "grey", className: "icon-size" }}>
        <IoClose/>
        </IconContext.Provider>
        </div>
        <div className='form_inputs'>
          <h1>Create Product</h1>
          <div className='flex-column'>
            <label>Add title</label>
            <input
              type='text'
              value={input.title}
              onChange={onChange}
              name='title'
              placeholder='Title'
            />
          </div>
          <div className='flex-column'>
            <label>Add price</label>
            <input
              type='number'
              value={input.price}
              onChange={onChange}
              name='price'
              placeholder='Price'
            />
          </div>
          <div className='flex-column'>
            <label>Add rating</label>
            <input
              type='number'
              value={input.rating}
              onChange={onChange}
              name='rating'
              placeholder='Rating'
            />
          </div>
          <div className='flex-column'>
            <label>Add image</label>
            <input
              type='file'
              onChange={onChange}
              name='file'
              placeholder='Image'
            />
          </div>
          <div className='flex-column'>
            <label>Add description</label>
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
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
