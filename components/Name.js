import React, { Component, PropTypes } from 'react';

class Other extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.changeName = this.changeName.bind(this);
    }
    changeName(e) {
        this.setState({name: e.target.value});
    }
    get message () {
        const { name } = this.state;
        const { gettingCrazy } = this.props;

        return 'Hello, ' + (name ? `I\'m ${name} and ` : '') + 'I\'m ' + gettingCrazy;
    }
    render() {
        const { name } = this.state;
        return (
          <div>
            <input type='text' placeholder='Your name' value={this.state.name} onChange={this.changeName} />
            <h2>{this.message}</h2>
          </div>
        );
    }
}

export default Other;
