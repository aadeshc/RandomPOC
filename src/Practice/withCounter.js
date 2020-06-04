import React, { Component } from 'react'

const UpdatedComponent = (OldComponent) => {

    class NewComponent extends React.Component {
        constructor() {
            super()
            this.increamentCount = this.increamentCount.bind(this)
            this.state({
                Count: 1
            })
        }


        increamentCount() {
            this.setState((prevState) => {
                return { Count: prevState.Count + 1 }

            })

        }

        render() {
            return (
                <OldComponent clickhandler={this.increamentCount} Count={this.state.Count}></OldComponent>
            )
        }
    }

    return NewComponent
}

export default UpdatedComponent