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
    render() {
        return (
          <div>
            <input type='text' placeholder='Your name' value={this.state.name} onChange={this.changeName} />
            <h2>Hello, I'm{' '}{this.state.name}{' '}and I'm {this.props.gettingCrazy}</h2>
          </div>
        );
    }
}

export default Other;
