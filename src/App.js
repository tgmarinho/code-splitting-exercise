import React, { Component } from 'react';
import './App.css';
import withLoadable from './LoadableFlex'

class App extends Component {

  state = {
    route: 'Page1'
  }

  onRouteChange = (route) => {
   
    this.setState({ route })
    
  }

  render() {

    const SplittingCode = withLoadable(this.state.route)
    return <SplittingCode onRouteChange={this.onRouteChange} />
  }
}

export default App;
