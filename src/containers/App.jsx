import React, { Component } from 'react'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children || <Home />}
      </div>
    )
  }
}

export default App