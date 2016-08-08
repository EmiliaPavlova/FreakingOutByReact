import React, {Component, PropTypes } from 'react';

class Sleepy extends Component {
    constructor(props) {
        super(props);
        this.state = {checked: this.props.checked};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({checked: e.target.value});
    }
    render() {
        return (
          <div>
            <h3>
              Sleepy? {this.state.checked}  
            </h3>
            <form action='#' method='post'>
              <div>
                <label>
                  <input type='radio' name='needForSleep' checked={this.state.value}  value='Bloody sleepy' onClick={this.handleClick} />
                  Bloody sleepy
                </label>
            </div>
            <div>
                <label>
                  <input type='radio' name='needForSleep' checked={this.state.value} value='Veeeery sleepy' onClick={this.handleClick} />
                  Veeeery sleepy
                </label>
              </div>
            </form>
          </div>
        );
    }
}

Sleepy.defaultProps = { checked: 'Not sleepy' };

export default Sleepy;
