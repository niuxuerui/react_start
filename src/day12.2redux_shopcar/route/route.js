import {BrowserRouter,Route,Link} from "react-router-dom";

import React, { Component } from 'react'
import {connect} from "react-redux"
import List from "../view/list"
import Shopcar from "../view/shopcar"
import {Badge} from "antd"
import "antd/dist/antd.css"

 class RouteConfig extends Component {
    render() {
        let {
            sum
        }=this.props;
        return (
            <BrowserRouter>
              <div className="route">
                <Route path="/" component={List} exact></Route>
                <Route path="/shopcar" component={Shopcar}></Route>

                <div className="bottom">
                    <Link to="/">列表页</Link>
                    <Link to="/shopcar">购物车</Link>
                </div>
                <Badge count={sum}>
                购物车{sum}
                </Badge>
              </div>
            </BrowserRouter>
        )
    }
}
let readStore=(store)=>{
    return store.listStore
}
export default  connect(readStore)(RouteConfig);
