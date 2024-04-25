import React from 'react'
import { CartWidget } from './CartWidget'
import './navbar.css'

export const NavBar = () => {

  return (
    <div className='nav-bar'>
        <div className='logo'>
            <img className='img-logo' src ="../../assets/Screenshot (211).png" alt="BEAUTY SHOP" />
        </div>

        <div className='navb'>
            <div>Inicio</div>
            <div>Productos</div>
            <div>Contactos</div>
        </div>

        <div className='carrito'> 
            <CartWidget/>
        </div>
    </div>
  )
}
