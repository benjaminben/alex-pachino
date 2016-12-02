import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header seed={this.props.route.seed} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
