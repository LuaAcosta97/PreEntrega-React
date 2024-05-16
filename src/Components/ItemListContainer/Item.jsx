import React from 'react'
import './item.css'

const Item = ( {product} ) => {
  return (
    <div className='Card-prod'>
    <img className='img-prod' src={product.image}/>
    <p>{product.name}</p>
    <p>precio:{product.price}</p>
    <button>ver producto</button>
    </div>
  );
};

export default Item