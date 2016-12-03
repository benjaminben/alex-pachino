import React, {Component} from 'react';

class Home extends Component {
  render() {
    const content = this.props.route.content;
    return(
      <div id="Home">
        <span className="img-cont hero">
          <img src={content.hero_url} />
        </span>
        <span id="bio">
          <p dangerouslySetInnerHTML={
              {__html : content.bio}
             }></p>
        </span>
      </div>
    )
  }
}

export default Home;
