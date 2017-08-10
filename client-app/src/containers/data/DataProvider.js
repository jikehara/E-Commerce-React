import React from 'react';
import Faker from 'faker';
// import {Shop} from '../../components';
import Layout from '../../Layout';

class DataProvider extends React.Component {

  state = {
    title: undefined,
    products: null,
    cart: [],
    user: null,
    isDataLoaded: false
  }

  componentDidMount() {
    this.setTitle();
    this.fetchProducts();
    this.createUser();
    this.setState({ isDataLoaded: true })
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

  createUser = () => {
    const user = {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      email: Faker.internet.email(),
      avatar: Faker.internet.avatar()
    }
    this.setState({ user: user })
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
    let totalPrice = 0;
    for (let i = 0; i < this.state.cart.length; i += 1) {
      totalPrice += parseFloat(this.state.cart[i].productPrice);
    }
    totalPrice = totalPrice.toFixed(2);

    return (
      <div>
        {
          this.state.isDataLoaded
          ? <Layout
              title={this.state.title}
              products={this.state.products}
              addItem={this.addToCart}
              cart={this.state.cart}
              totalPrice={totalPrice}
              user={this.state.user}
            />
          : <h1>Missing Data</h1>
        }
      </div>
    )
  }
}

export default DataProvider;
