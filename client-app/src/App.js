import React, { Component } from 'react';
import './App.css';
import {HomeContainer, AboutContainer, ShopContainer} from './containers';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// <NavBar />
// <h1>Hello Worlds</h1>
// <Route exact path='/' component={HomeContainer} />
// <Route path='/about' component={AboutContainer} />
// <Route path='/shop' component={ShopContainer} />

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path='/' component={HomeContainer} />
            <Route path='/about' component={AboutContainer} />
            <Route path='/shop' component={ShopContainer} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
