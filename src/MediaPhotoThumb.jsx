import React, {Component} from 'react';

class MediaPhotoThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width : 'auto',
      height : 'auto',
      sized : false,
    }

    this.sizeImg = this.sizeImg.bind(this);
  }

  sizeImg(img) {
    var width = img.width / 10;
    if( width <= 200 || width >= 400 ){
      width = (width <= 200) ? 200 : 400;
    }
    this.setState({width : width, sized : true});
  }

  render() {
    const item = this.props.item;

    return(
      <span className="embed photo">
        <img src={item.img_url}
             className={"v-bottom"+(this.state.sized ? '' : ' none')}
             width={this.state.width}
             height={this.state.height}
             onLoad={(e) => this.sizeImg(e.target)}
             alt={item.desc} />
        <span className="hover-cover flex"
              onClick={() => this.props.overview(item)}>
          <span className="desc">{item.desc}</span>
        </span>
      </span>
    )
  }
}

export default MediaPhotoThumb;

    // <span className="photo-thumb inline-table relative">
    //   <Link to={`/media/photos/${psUrl}/${photoId}`} className="width100 height100 block">
    //     <img className={"vertical-bottom" + (this.state.sized ? '' : ' none')}
    //          src={this.props.item.imgSrc}
    //          width={this.state.width}
    //          height={this.state.height}
    //          onLoad={(e) => this.sizeImg(e.target)} />
    //     <span className="hover-cover text-center absolute flex">
    //       <p>{this.props.item.psTitle}</p>
    //     </span>
    //   </Link>
    // </span>
