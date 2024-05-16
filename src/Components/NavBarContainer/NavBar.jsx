import React from 'react'
import { CartWidget } from './CartWidget'
import logo from '../../assets/Screenshot (211).png'
import './navbar.css'

export const NavBar = () => {

  return (
    <div className='nav-bar'>
        <div className='brand'>
            <img className='logo' src ={logo} alt="BEAUTY SHOP" />
        </div>

        <div className='navb'>
            <div>Inicio</div>
            <div>Make up</div>
            <div>Skin care</div>
        </div>

        <div className='carrito'> 
            <CartWidget/>
        </div>
    </div>
  )
}
