import React from 'react';
import Faker from 'faker';
import {Shop} from '../../components';

class ShopContainer extends React.Component {

  state = {
    title: undefined,
    products: null,
    productName: null,
    productPicture: null,
    productPrice: null
  }  

  componentDidMount() {
    this.setTitle();
    this.fetchProducts();
  }

  fetchProducts = () => {
    const productArray = [];
    for (let i=0; i<30; i+=1) {
      productArray.push({
        productName: Faker.commerce.productName(),
        productPicture: Faker.random.image(),
        productPrice: Faker.commerce.price()
      })
    }
    this.setState({ products: productArray})
  }

  setTitle = () => {
    setTimeout(() => {
      this.setState({ title: "Shop"})
    }, 2000)
  }

  render() {
    return (
      <div>
        {
          this.state.title && this.state.products
          ? <Shop title={this.state.title} products={this.state.products}/>
          : <h1>Missing Title or Products</h1>
        }
      </div>
    )
  }
}

export default ShopContainer;
