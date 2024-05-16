import React from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";

export const CartWidget = () => {
  return (
    <button>
        <PiShoppingCartSimpleFill size= {30}/>
        <div>0</div>
    </button>
  )
}
