import React, { Component } from 'react'

export default class ChildComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.name("Aadesh")
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
