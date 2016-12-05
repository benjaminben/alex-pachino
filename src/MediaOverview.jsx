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
        <img className="absolute" src={item.img_url} alt={item.desc} title={item.desc} />
      </div>
    )
  }
}

export default MediaPhotoOverview;
