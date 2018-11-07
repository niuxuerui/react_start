import React, { Component } from 'react'

export default class Son extends Component {
    render() {
        console.log()
        let {
         wt
        }=this.props
        return (
            <div>
                son
                <b>{wt}</b>
            </div>
        )
    }
}
