import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import  './cart.css'

const Cart = () => {
  const { carrito, vaciarCarrito, deleteProdById, totalPrice } = useContext(CartContext)

  if (carrito.length === 0) {
    return (
      <div className='cart-vacio' >
        <h1>Tu carrito esta vacio!!! </h1>
        <Link to="/" className='ver-prods'>Ver Productos</Link>
      </div>
    )
  }
  
  return (
    <div className='cart-Container'>
      <h2 className='title-cart'>CARRITO DE COMPRAS</h2>
      {
        carrito.map((productoCarrito) => (
          <div key={productoCarrito.id} className='cart-item'>
            <img src={productoCarrito.image} className='cart-Img' />
            <h3>{productoCarrito.name} </h3>
            <p>precio Unitario: {productoCarrito.price} </p>
            <p>cantidad: {productoCarrito.quantity} </p>
            <h3>subtotal: {productoCarrito.price * productoCarrito.quantity} </h3>
            <button onClick={() => deleteProdById(productoCarrito.id)}>Borrar</button>
          </div>
        ))
      }
      
      <div className='total-compra'>
        <div>Total de la compra: ${totalPrice()}</div>
        <button>Finalizar Compra</button>
      </div>
      <button className='butt-vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart