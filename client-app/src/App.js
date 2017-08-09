import React, { Component } from 'react';
import './App.css';
import {ShopContainer} from './containers';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


// <div>
//   <NavBar />
//   <Route exact path='/' component={HomeContainer} />
//   <Route path='/about' component={AboutContainer} />
//   <Route path='/shop' component={ShopContainer} />
// </div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ShopContainer />
        </Router>

      </div>
    );
  }
}

export default App;
