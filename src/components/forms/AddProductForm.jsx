import React from 'react';

const AddProductForm = () => {
  return (
    <div className='container'>
      <div className='form'>
        <div className='form_inputs'>
          <h1>Create Product</h1>
          <div className='flex-column'>
            <label>Add product title</label>
            <input type='text' placeholder='Title' />
          </div>
          <div className='flex-column'>
            <label>Add price</label>
            <input type='number' placeholder='Price' />
          </div>
          <div className='flex-column'>
            <label>Add product rating</label>
            <input type='number' placeholder='Rating' />
          </div>
          <div className='flex-column'>
            <label>Add product image</label>
            <input type='image' placeholder='Image' alt='add-image-field' />
          </div>
          <div className='flex-column'>
            <label>Add product description</label>
            <input type='text' placeholder='Description' />
          </div>
        </div>
        <button className='btn-block'>Create</button>
      </div>
    </div>
  );
};

export default AddProductForm;
