import React, { Component, PropTypes } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let commentTexts = this.props.dataKey.map(function(comment, i) {
            // key={i} - unique identifier
            return (
              <div key={i}>
                {comment.author}: {comment.text}
              </div>
            );
        });
        return (
          <div className='commentList'>
            {commentTexts}
          </div>
        );
    }
}

export default Comment;
