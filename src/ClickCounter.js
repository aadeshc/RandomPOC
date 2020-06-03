import React, { Component } from 'react';
import UpdatedComponent from './withCounter'
class ClickCounter extends Component {



    render() {
        debugger;

        return (
            <div>
                <button onClick={this.props.clickHandler}>Clicked {this.props.Count} times by {this.props.name}</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)