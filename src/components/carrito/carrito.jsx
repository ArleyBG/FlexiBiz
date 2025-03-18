import React from 'react'
import './carrito.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Carrito() {
  return (
    <div className="carrito">
        <button className='button-carrito' onClick={()=> alert('Carrito de compras')}>
            <FontAwesomeIcon icon={faShoppingCart} className='icon-carrito'/>
        </button>
    </div>
  )
}