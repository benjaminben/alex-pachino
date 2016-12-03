import React, {Component} from 'react';

class Home extends Component {
  render() {
    const content = this.props.route.content;
    return(
      <div id="Home">
        <span className="img-cont hero">
          <img src={content.hero.img_url}
               alt={content.hero.img_alt}
               title={content.hero.img_tit} />
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
