import React, {Component} from 'react';

class Credits extends Component {
  render() {
    const content = this.props.route.content;

    return(
      <div id="Credits" className="v-top text-center">
        <div className="categories inline-block text-left">
        {
          content.categories.map((c, i) => {
            return(
              <span key={i} className="category inline-block">
                <h1 className="cat-title">{c.title}</h1>
                {
                  <ul className="cat-list">
                    {
                      c.items.map((item, index) => {
                        return(
                          <li key={index} className="item">
                            {
                            item.link
                            ?
                            <a className="name" href={item.link}>{item.name}</a>
                            :
                            <span className="name">{item.name}</span>
                            }

                            {
                            item.embed
                            ?
                            <span className="block embed"
                                  dangerouslySetInnerHTML={{__html: item.embed}}></span>
                            :
                            null
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                }
              </span>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default Credits;
