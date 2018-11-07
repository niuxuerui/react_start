import React, { Component } from 'react'
import {Spin} from "antd"
import 'antd/dist/antd.css'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../../store/IndexStore/index.action"
import {withRouter} from "react-router-dom"
 class Loding extends Component {
    render() {
        let{
            children,
            isLoding
        }=this.props;
        return (
            <div>
                <Spin spinning={isLoding}>
                    {
                        children
                    }   
                </Spin>
            </div>
        )
    }
}
let read=(store)=>{
    return store.IndexStore
}
let set=(dispatch)=>{
    return bindActionCreators({...setFns},dispatch)
}
export default  connect(read,set)(withRouter(Loding));

