import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    render() {
        console.log("************************* In Pure Component***************")
        return (
            <div>
                PureComponent
            </div>
        )
    }
}
