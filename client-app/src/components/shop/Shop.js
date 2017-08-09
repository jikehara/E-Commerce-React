import React from 'react';
import ShopTile from './ShopTile'

const Shop = (props) => {
  return (
    <div>
      <h1>Hello from {props.title}!</h1>

      <div className="product-card-container">
        {
          props.products.map((item, index) => (
            <div key={index} className="product-card">
              <ShopTile item={ item } addItem={props.addItem}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Shop;
