import React from 'react';
import Faker from 'faker';
import {Shop} from '../../components';
import Layout from '../../Layout';

class ShopContainer extends React.Component {

  state = {
    title: undefined,
    products: null,
    productID: null,
    productName: null,
    productPicture: null,
    productPrice: null,
    cart: []
  }

  componentDidMount() {
    this.setTitle();
    this.fetchProducts();
  }

  fetchProducts = () => {
    const productArray = [];
    for (let i=1; i<31; i+=1) {
      productArray.push({
        productID: i,
        productName: Faker.commerce.productName(),
        productPicture: Faker.random.image(),
        productPrice: Faker.commerce.price()
      })
    }
    this.setState({ products: productArray})
  }

  addToCart = (product) => {
    const tempCart = this.state.cart;
    tempCart.push(product);
    this.setState({ cart: tempCart });
    alert(`${product.productName} was added to your cart`)
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
          ? <Layout title={this.state.title} products={this.state.products} addItem={this.addToCart}
          cart={this.state.cart} />
          : <h1>Missing Title or Products</h1>
        }
      </div>
    )
  }
}

export default ShopContainer;
