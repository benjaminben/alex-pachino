import React, {Component} from 'react';

class Gear extends Component {
  render() {
    const content = this.props.route.content;

    return(
      <div id="Gear">
        {
          content.categories.map((c,i) => {
            return(
              <div className="category relative">
                <span className="img-cont"
                      style={{
                        backgroundImage : `url(${c.img_url})`,
                      }}></span>
                <span className="text-cont relative">
                  <h1>{c.title}</h1>
                  {
                    c.groups.map((g,i) => {
                      return(
                        <span className="block group">
                          <h2 className="inline">{g.name}: </h2>
                          <p className="inline" dangerouslySetInnerHTML={{__html : g.text}}></p>
                        </span>
                      )
                    })
                  }
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Gear;
