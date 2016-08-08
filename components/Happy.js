import React, {Component, PropTypes } from 'react';

class Happy extends Component {
    constructor(props) {
        super(props);
        this.state = {count: props.count};
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }
    increaseCount() {
        this.setState({count: this.state.count + 1});
    }
    decreaseCount() {
        this.setState({count: this.state.count - 1});
    }
    render() {
        return (
          <div className='changePoints'>
            <p>
              Happy: {this.state.count} points
              {' '}
            </p>
            <button onClick={this.increaseCount}>
              HappyUp :)
            </button>
            <button onClick={this.decreaseCount}>
              HappyDown :(
            </button>
          </div>
        );
    }
}
Happy.PropTypes = { count: React.PropTypes.number };
Happy.defaultProps = { count: 0 };

export default Happy;
