import React, { Component } from 'react'
import './App.css'
import {HomeContainer, AboutContainer} from './containers'
import {Route, Switch} from 'react-router-dom'
import {NavBar, Shop, Cart, Profile} from './components'
// import Faker from 'faker';

class Layout extends Component {
  render () {
    return (
      <div>
        <NavBar
          numItemsInCart={this.props.cart.length}
          totalPrice={this.props.totalPrice}
        />
        <div>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/about' component={AboutContainer} />
            <Route
              path='/shop'
              render={() =>
                <Shop
                  products={this.props.products}
                  addItem={this.props.addItem}
                  title={this.props.title}
                />
              }
            />
            <Route
              path='/cart'
              render={() =>
                <Cart
                  cart={this.props.cart}
                  totalPrice={this.props.totalPrice}
                />
              }
            />
            <Route
              path='/profile'
              render={() =>
                <Profile
                  user={this.props.user}
                />
              }
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Layout
