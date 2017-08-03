import React, { Component } from 'react';
import {HomeContainer, AboutContainer} from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HomeContainer />
        <AboutContainer />
      </div>
    );
  }
}

export default App;
