import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent) => {


    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                Count: 1
            }

            this.increamentCount = this.increamentCount.bind(this)
        }


        increamentCount() {
            this.setState((prevState) => {
                return { Count: prevState.Count + 1 }

            })

        }
        render() {
            return <OriginalComponent clickHandler={this.increamentCount} Count={this.state.Count} {...this.props} />
        }
    }
    return NewComponent
}


export default UpdatedComponent