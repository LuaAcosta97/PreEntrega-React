import React from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";

export const CartWidget = () => {
  return (
    <div>
        <PiShoppingCartSimpleFill size= {30}/>
        <button>0</button>
    </div>
  )
}
