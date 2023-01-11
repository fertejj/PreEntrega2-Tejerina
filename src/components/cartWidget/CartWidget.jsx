import React from 'react'
import {TiShoppingCart} from 'react-icons/ti'
import './CartWidget.css'

const CartWidget = (props) => {
  return (
    <li className='cart-icon-text'><TiShoppingCart className='cart-icon'/><li className='cart-number'>{props.cantidad}</li></li>
  )
}

export default CartWidget