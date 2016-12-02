import React, {Component} from 'react';

import Nav from './Nav';

class Header extends Component {
  render() {
    return(
      <header>
        alex pachino
        <Nav views={this.props.seed.views} />
      </header>
    )
  }
}

export default Header;
