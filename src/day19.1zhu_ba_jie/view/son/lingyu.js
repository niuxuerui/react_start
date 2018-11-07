import React, { Component } from 'react'

export default class Lingyu extends Component {
    render() {
        let {
            data
        }=this.props;
        return (
            <div className="leixing pos">
                {
                    data&&data.length>0&&data.map((v,i)=>{
                        return <b key={i}>{v}</b>
                    })
                }
            </div>
        )
    }
}
