import React, {Component, PropTypes } from 'react'

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: false};
        this.toggleChange = this.toggleChange.bind(this);
    }
    toggleChange() {
        this.setState({isChecked: !this.state.isChecked});
    }
    render() {
        var className = this.state.isChecked ? 'darkcyan' : null;
        return (
            <div>
                <h3>
                    <input type="checkbox" 
                           name="sunny" 
                           checked={this.state.value}
                           onChange={this.toggleChange} />  
                <span className={className}>Am I checked?</span> {this.state.isChecked ? 'yep' : ''}
                </h3>       
            </div>
        )
    }
}

export default Checkbox