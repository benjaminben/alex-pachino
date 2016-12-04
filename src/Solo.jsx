import React, {Component} from 'react';

class Solo extends Component {
  render() {
    const content = this.props.route.content;

    return(
      <div id="Solo">
        {
          content.embeds.map((e,i) => {
            let type = e.type.toUpperCase();
            return(
              <span key={i}
                    className={"block embed" + (
                      type === 'YOUTUBE' ||
                      type === 'VIMEO'   ||
                      type === 'VIDEO'
                      ?
                      " video"
                      :
                      ""
                    )}
                    dangerouslySetInnerHTML={{__html: e.url}}>
              </span>
            )
          })
        }
      </div>
    )
  }
}

export default Solo;
