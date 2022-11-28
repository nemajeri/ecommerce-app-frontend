import React from 'react';
import '../App.css';

const Subbar = () => {
  const tiers = [
    'Clothing',
    'Home Accesories',
    'Jewellery',
    'Cameras',
    'Beauty',
    'Sports',
    'Computer Accesories',
    'Handbags',
  ];
  return (
    <div className='subbar'>
      <ul>
        {tiers.map((tier, i) => (
          <li key={i}>
            <a href={`/${tier.toLowerCase}`}>{tier}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subbar;
