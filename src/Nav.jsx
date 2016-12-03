import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  render() {
    return(
      <nav className="flex">
        {
          Object.keys(this.props.views).map((p, i) => {
            const page = this.props.views[p];
            return(
              <Link key={i} to={page.path}
                    className={
                      this.props.path === page.path
                      ?
                      "active"
                      :
                      ""
                    }>
                {page.name}
              </Link>
            )
          })
        }
      </nav>
    )
  }
}

export default Nav;
