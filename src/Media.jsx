import React, {Component} from 'react';
import MediaPhotoThumb from './MediaPhotoThumb';
import MediaOverview from './MediaOverview';

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overview : null,
    }

    this.overview = this.overview.bind(this);
  }
  overview(item) {
    this.setState({overview : item ? item : null})
  }
  render() {
    const content = this.props.route.content;

    return(
      <div id="Media" className="text-center">

      {
        content.items.map((item, index) => {
          switch( item.type.toUpperCase() ){
            case 'PHOTO' :
              return(
                <MediaPhotoThumb key={index} item={item} overview={this.overview} />
              )
              break;
            case 'VIDEO' :
              return(
                <span className="embed video"
                      key={index}
                      alt={item.desc}
                      dangerouslySetInnerHTML={{__html: item.embed}}>
                </span>
              )
              break;
          }
        })
      }

      {
        this.state.overview
        ?
        <MediaOverview item={this.state.overview} hide={this.overview} />
        :
        null
      }

      </div>
    )
  }
}

export default Media;
