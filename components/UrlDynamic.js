import React, { Component, PropTypes } from 'react';
import Avatar from './Avatar.js';

class UrlDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.state = {data: []};
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange(e) {
        this.setState({name: e.target.value});
    }
    handleSubmit(e) {
        let url = 'https://api.github.com/users/' + this.state.name + '/repos';
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
                      {link.description}: <span className='bold'>{link.name}</span>
                      , language: {link.language}, owner: {link.owner.login};
                    </p>
                </div>
              );
        });
        // console.log('this.state.data.owner: ' + this.state.data.owner);
        return (
          <div>
            <h3>Some GitHub Staff</h3>
            {this.state.data[0] ? <Avatar picName={this.state.data[0].owner.avatar_url} /> : null}
            <input type='text' placeholder='GitHub username' value={this.state.name} onChange={this.onChange} />
            <input type='submit' value='Submit' onClick={this.handleSubmit} />
            {repos}
          </div>
        );
    }
}

export default UrlDynamic;
