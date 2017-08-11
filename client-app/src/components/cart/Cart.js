import React from 'react';
import CartTile from'./CartTile';

const Cart = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello from your Cart!</h1>
      <h2>Your current total is: ${props.totalPrice}</h2>
      <div className='cart-tile-container'>
        {
          props.cart.map((item, index) => <CartTile item={item} key={index}/>)
        }
      </div>
    </div>
  )
}

export default Cart;
