import React, { Component, PropTypes } from 'react';

class Avatar extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        console.log('picName: ' + this.props.picName);
        return (
          <div>
            <img src={this.props.picName} width='80px;' />
          </div>
        );
    }
}

export default Avatar;
