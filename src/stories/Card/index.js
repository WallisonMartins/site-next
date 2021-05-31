import React from 'react';

import './card.css';

export const Card = () => {
  const imageExample = 'https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'

  return (
    <div className='box-card'>
      <a href="/">
        <div className='card-container'>
          <img
            className='card-img'
            src={imageExample}
            width={368}
            height={309}
          />
          <div className='card-body'>
            <h2 className='card-title'>My Capsule</h2>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur adipisicin.
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}