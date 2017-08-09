import React from 'react';

const Shop = (props) => {
  return (
    <div>
      <h1>Hello from {props.title}!</h1>

      <div className="product-card-container">
        {
          props.products.map((item, index) => (
            <div key={index} className="product-card">
              <h3>{ item.productName }</h3>
              <p>${ item.productPrice }</p>
              <img src={ item.productPicture } />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Shop;
