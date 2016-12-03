import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="table width100 absolute">
        <span className="table-cell text-center v-middle">
          <a className="link inline-block" target="_blank" href="//google.com">
            <img className="icon" src="/assets/Social/tumblr-icon-black.svg" />
          </a>
          <a className="link inline-block" target="_blank" href="//google.com">
            <img className="icon" src="/assets/Social/ig-icon-black.svg" />
          </a>
          <a className="link inline-block" target="_blank" href="//google.com">
            <img className="icon" src="/assets/Social/email-icon-black.svg" />
          </a>
        </span>
      </footer>
    )
  }
}

export default Footer;
