import React, { Component, PropTypes } from 'react'
import Name from './Name.js'
import Comments from './Comments.js'
import Happy from './Happy.js'
import Sleepy from './Sleepy.js'
import Checkbox from './Checkbox.js'
import GitHub from './GitHub.js'
import Url from './Url.js'
import UrlDynamic from './UrlDynamic.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { propTest = 'getting crazy', value, onIncrement, onDecrement } = this.props;
    let commentsArray = [
      { id: 1, author: "Ems", text: "React is stupid" },
      { id: 2, author: "Ems Advanced", text: "Ha-ha-ha, you are!" },
      { id: 3, author: "Ems", text: "Nope! :P" }
    ];
    return (
      <div>
        <Name gettingCrazy={propTest} />
        <Happy />
        <Sleepy />
        <Checkbox />

        <div className="commentBox">
          <h3>Comments</h3>
          <Comments dataKey={commentsArray} />
        </div>

        {/*<GitHub />*/}
        {/*<Url />*/}
        <UrlDynamic />
      </div>
    )
  }
}

export default App
