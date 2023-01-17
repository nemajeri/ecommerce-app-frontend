import ReactDOM from 'react-dom';
import React from 'react';

 const Portal = ({ children }) => {
    return ReactDOM.createPortal(children, document.getElementById('portal-root'));
  };

  export default Portal