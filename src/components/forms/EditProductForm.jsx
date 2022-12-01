import axios from 'axios';
import React, { useState } from 'react';

const AddProductForm = ({ id }) => {
  const [input, setInput] = useState({
    title: '',
    price: '',
    rating: '',
    description: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(input);
    axios
      .put(`http://localhost:8080/api/v1/products/${id}?${searchParams.toString()}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    const { name, type, value } = e.target;

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
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
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
              onChange={(e) => setSelectedFile(e.target.files[0])}
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
          Create
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
