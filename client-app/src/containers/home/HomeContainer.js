import React, {Component} from 'react'
import {Home} from '../../components'

class HomeContainer extends Component {

  state = {
    title: undefined
  }

  componentDidMount() {
    this.setTitle()
  }

  setTitle = () => {
    setTimeout(() => {
      this.setState({ title: "Home"})
    }, 2000)
  }

  render() {
    return (
      <div>
        {
          this.state.title
          ? <Home title={this.state.title}/>
          : <h1>No Title for this page</h1>
        }
      </div>
    )
  }
}

export default HomeContainer;
