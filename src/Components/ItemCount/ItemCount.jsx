import React, { useState } from 'react'
import './itemCount.css';

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)

    const restar = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }

    return (
        <div className='item-count'>
            <div className='buttons-count'>
                <button className='counts' onClick={restar}>-</button>
                <div>{count}</div>
                <button className='counts' onClick={sumar}>+</button>
            </div>
            <button>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount