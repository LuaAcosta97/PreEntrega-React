import React from 'react'
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ product }) => {
  return (
    <div className='Detail-product'>
      <img src={product.image} />
      <div className='details'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>TIPO DE PIEL: {product.typeSkin}</p>
        <p>Precio: $ {product.price}</p>
        <ItemCount stock={product.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail