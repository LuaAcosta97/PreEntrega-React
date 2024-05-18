import React from 'react'
import './item.css'
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className='Card-prod'>
      <img className='img-prods' src={product.image} />
      <p>{product.name}</p>
      <Link className='detalle' to={"/detail/" + product.id}>Detalles</Link>
    </div>
  );
};

export default Item