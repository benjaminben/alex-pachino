import React, {Component} from 'react';

class Solo extends Component {
  render() {
    const content = this.props.route.content;

    return(
      <div id="Solo">
        {
          content.embeds.map((e,i) => {
            return(
              <span className="block embed"
                    dangerouslySetInnerHTML={{__html: e}}>
              </span>
            )
          })
        }
      </div>
    )
  }
}

export default Solo;
