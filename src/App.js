import React, { Component } from 'react';
import './App.css';
import Loadable from 'react-loadable'

const LoadableComponent1 = Loadable({
  loader: () => {
    return import('./Components/Page1')
  },
  loading() {
    return <div>Loading...</div>
  }
});

const LoadableComponent2 = Loadable({
  loader: () => {
    return import('./Components/Page2')
  },
  loading() {
    return <div>Loading...</div>
  }
});

const LoadableComponent3 = Loadable({
  loader: () => {
    return import('./Components/Page3')
  },
  loading() {
    return <div>Loading...</div>
  }
});



class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    }
  }
  
  onRouteChange = (route) => {
  
    this.setState({ route });
    console.log("teste" + route)
   
  }
  render() {
    if(this.state.route === 'page1'){
      return <LoadableComponent1 onRouteChange={this.onRouteChange} />
    } else if(this.state.route === 'page2'){
      return <LoadableComponent2 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page3'){
      return <LoadableComponent3 onRouteChange={this.onRouteChange} />
    }
 
  }
}

export default App;
