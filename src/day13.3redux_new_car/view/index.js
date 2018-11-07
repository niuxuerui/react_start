import React, { Component } from 'react'
import {Route,Link} from "react-router-dom"
import List from "./list"
 import Car from "./car"
 import {Badge} from "antd"
 import "antd/dist/antd.css"
 import {connect} from "react-redux"
 class Index extends Component {
    render() {
        let {
            sum
        }=this.props;
        return (
            <div className="wrap">
                 <div className="header">
                 头部</div>
                <div className="content">
                    <Route path="/index/list" component={List}></Route>
                    <Route path="/index/car" component={Car}></Route>
                </div>
                <div className="bottom">
                     <Link className="bb" to="/index/list">首页</Link>
                     <Link className="bb" to="/index/car">购物车
                       <Badge count={sum}></Badge>
                     </Link>
                </div>
            </div>
        )
    }
}
let read=(store)=>{
    return store.ListStore
}

export default  connect(read)(Index);
