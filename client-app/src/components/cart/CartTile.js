import React from 'react';

const CartTile = (props) => {
  return (
    <div>
      <h3> {props.item.productName} for ${props.item.productPrice} </h3>
    </div>
  )
}

export default CartTile;
