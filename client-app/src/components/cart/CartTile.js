import React from 'react';

const CartTile = (props) => {
  return (
    <div className='cart-tile'>
      <h3> {props.item.productName} for ${props.item.productPrice} </h3>
      <img src={ props.item.productPicture } alt='Product Picture'/>
      <button className='btn-remove-from-cart' onClick={() => alert("Removing ")}>Remove from Cart</button>
    </div>
  )
}

export default CartTile;
