import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  render() {
    return(
      <nav>
        {
          this.props.views.map((page, i) => {
            return <Link key={i} to={page.path}>{page.name}</Link>
          })
        }
      </nav>
    )
  }
}

export default Nav;
