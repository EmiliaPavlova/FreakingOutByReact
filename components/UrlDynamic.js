import React, { Component, PropTypes } from 'react'
import Avatar from './Avatar.js'

class Url extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.state = {data: []};
  }
  onChange(e) {
    this.setState({name: e.target.value});
  }
  handleSubmit(e) {
    let url="https://api.github.com/users/" + this.state.name + "/repos";
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
              {link.description}: <span className="bold">{link.name}</span>
              , language: {link.language}, owner: {link.owner.login};
            </p>
        </div>
      );
    });
    console.log('name: ' + this.state.name)
    return (
      <div>
        <h3>Some GitHub Staff</h3>
        {/*<Avatar pic={this.state.name} />*/}
        <input type="text" 
                placeholder="GitHub username" 
                value={this.state.name} onChange={this.onChange.bind(this)} />
        <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} />
        {repos}
      </div>
    ) 
  }
}

export default Url