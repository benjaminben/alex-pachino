import React, {Component} from 'react';

import Nav from './Nav';

class Header extends Component {
  render() {
    return(
      <header>
        <img src="/assets/name.svg" />
        <Nav views={this.props.seed.views}
             path={this.props.path} />
      </header>
    )
  }
}

export default Header;
