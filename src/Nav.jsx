import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  render() {
    const keys = Object.keys(this.props.views);

    return(
      <nav className="table text-center">
        {
          keys.map((p, i) => {
            const page = this.props.views[p];
            return(
              <Link key={i} to={page.path}
                    className={"table-cell dg-txt v-middle text-center"}>
                <span className={                      (
                      this.props.path === page.path
                      ?
                      "active"
                      :
                      ""
                      )}>
                  {page.name}
                </span>
              </Link>
            )
          })
        }
      </nav>
    )
  }
}

export default Nav;
