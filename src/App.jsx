import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header seed={this.props.route.seed}
                path={this.props.router.location.pathname} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
