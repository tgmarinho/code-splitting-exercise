import React, { Component } from 'react';
import './App.css';
import Loadable from 'react-loadable'
import withLoadable from './LoadableFlex'

class App extends Component {

  state = {
    route: 'Page1'
  }

  onRouteChange = (route) => {

    this.setState({ route })

  }

  render() {

    const LoadableFlex = withLoadable(this.state.route)
    return <LoadableFlex onRouteChange={this.onRouteChange} />
  }
}

export default App;
