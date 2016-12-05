import React, {Component} from 'react';

class MediaPhotoOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    var item = this.props.item;

    return(
      <div className="fixed overview">
        <span className="escape absolute" onClick={() => this.props.hide()}></span>
        <img className="absolute" src={this.props.item.img_url} />
        <span className="info absolute white-txt">
          <h2 className="gotham-book">{this.props.item.desc}</h2>
        </span>
      </div>
    )
  }
}

export default MediaPhotoOverview;
