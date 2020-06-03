import React, { Component, PureComponent } from 'react'
import PC from './PureComp.js'
import RC from './PureRegularComponent.js'
export default class PureParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Aadesh"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                Name: "Aadesh"
            })
        }, 2000)
    }
    render() {
        console.log("************************* in Parent Component***************")
        return (
            <div>
                <PC name={this.state.name} />
                <RC name={this.state.name} />
            </div>
        )
    }
}
