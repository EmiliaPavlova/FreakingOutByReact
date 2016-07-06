import React, { Component, PropTypes } from 'react'

class Url extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  componentDidMount() {
    let url="https://api.github.com/users/EmiliaPavlova/repos";
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(result) {
        this.setState({data: result});
      }.bind(this)
    });
  }

  render() {
    let repos = this.state.data.map(function(link, i) { 
    return (
        <div key={i}>
            <p>
              {link.description || 'N/A'}: <span className="bold">{link.name}</span>
              , language: {link.language}, owner: {link.owner.login};
            </p>
        </div>
      );
    });
    return (
      <div>
        <h3>Some GitHub Staff</h3>
        {repos}
      </div>
    )
  }
}

export default Url