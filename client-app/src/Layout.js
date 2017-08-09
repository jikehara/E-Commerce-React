import React, { Component } from 'react';
import './App.css';
import {HomeContainer, AboutContainer, ShopContainer} from './containers';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NavBar, Shop} from './components';
import Faker from 'faker';



class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar numItemsInCart={this.props.cart.length}/>
        <div>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/about' component={AboutContainer} />
            <Route path='/shop' render={() => <Shop products={this.props.products} addItem={this.props.addItem} title={this.props.title}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
