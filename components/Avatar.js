import React, { Component, PropTypes } from 'react'

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {avatar: {}};
  }
  componentDidMount() {
    let url="https://api.github.com/users/EmiliaPavlova";
    $.ajax({
      url: url,
      data: 'get',
      success: function(result) {
        this.setState({
          avatar: result
        });
      }.bind(this)
    });
}

  render() {
    console.log('avatar url: ' + this.state.avatar.avatar_url);
    return (
      <div>
        <img src={this.state.avatar !== undefined 
                ? this.state.avatar.avatar_url 
                : null} width="80px;" />
      </div>
    )
  }
}

export default Avatar