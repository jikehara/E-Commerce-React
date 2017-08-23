import React, {Component} from 'react';
import {About} from '../../components';

class AboutContainer extends Component {

  state = {
    title: undefined
  }

  componentDidMount() {
    this.setTitle();
  }

  setTitle = () => {
    setTimeout(() => {
      this.setState({ title: "About"})
    }, 2000)
  }

  render() {
    return (
      <div>
        {
          this.state.title
          ? <About title={this.state.title}/>
          : <h1>No Title for this page</h1>
        }
      </div>
    )
  }
}

export default AboutContainer;
