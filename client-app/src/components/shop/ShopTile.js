import React from 'react';

const ShopTile = (props) => {
  return (
    <div>
      <h3>{ props.item.productName }</h3>
      <p>${ props.item.productPrice }</p>
      <p>Item ID: { props.item.productID } </p>
      <img src={ props.item.productPicture } />
      <button className='btn-add-to-cart' onClick={() => props.addItem(props.item)}>Add to Cart</button>
    </div>

  )
}

export default ShopTile;
