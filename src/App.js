import React, { Component } from 'react';
import './App.css';
import LoadableFlex from './LoadableFlex'

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'Page1',
      component: null
    }
  }

  onRouteChange = (route) => {

    this.setState({ route });

    this.setState({}, () => {
      this.setState({
        component: LoadableFlex(this.state.route)
      }
    )})

  }

  componentWillMount() {
    this.setState({
      component: LoadableFlex(this.state.route)
    })
  }

  render() {
    return <this.state.component onRouteChange={this.onRouteChange} />
  }
}

export default App;
