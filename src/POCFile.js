import React, { Component } from 'react'

export default class POCFile extends Component {
    constructor(props) {

        super(props)
        const { name, age } = this.props
        this.state = {

        }
    }

    handleChange = (e) => {
        this.setState({
            NewName: e.target.value
        })
    }
    render() {
        return (
            <div>
                I am {this.props.name} and i am {this.props.age} year old
                {this.props.children}
                Please enter your name<input type="text" id="txtName" onChange={this.handleChange}></input>
                <input type="button" value="click" onClick={() => this.props.greethandler(this.state.NewName)} value="Click Me"></input>
            </div>

        )
    }
}
