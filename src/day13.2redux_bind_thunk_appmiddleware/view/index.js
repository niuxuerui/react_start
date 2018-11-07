import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import "../css/index.css"
import * as sendfn from "../store/Index/index.action"

class Index extends Component {
    render() {
        let {
            data,
            sendData
        }=this.props;
        console.log(this.props);
        return (
            <div>
                index
                <div className="box"
                 style={{background:data.color}}
                onClick={()=>{
             console.log(1);
             sendData("orange")
                }
                }>
                </div>
            </div>
        )
    }
}
let read=(store)=>{
  return store.IndexStore
}
let set=(dispatch)=>{
    return bindActionCreators({...sendfn},dispatch);
}
export default connect(read,set)(Index);
