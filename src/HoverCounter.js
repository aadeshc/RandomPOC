import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {



    render() {

        return (
            <div onMouseOver={this.props.clickHandler} style={{ height: "300px" }}>
                Hover {this.props.Count} Times
            </div>
        )
    }
}


export default UpdatedComponent(HoverCounter)
