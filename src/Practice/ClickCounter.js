import React, { Component } from 'react'

export default class ClickCounter extends Component {
    constructor() {
        super()
        this.state = {
            Count: 0
        }
    }

    increament() {
        this.setState(() => {
            return ({ Count: this.state.Count + 1 })
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
