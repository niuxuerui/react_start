import React, { Component } from 'react'
import {BrowserRouter,Route,Link,Redirect} from "react-router-dom"
import  Index from "../view/index"
import Login from "../view/login"
import Detail from "../view/detail"

export default class RouteConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrap">
                    <Route path="/" render={()=><Redirect to="/index/movie/hot"/>} exact></Route>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/detail/:id/:type" component={()=><Detail/>}></Route>
                </div>
                
            </BrowserRouter>
        )
    }
}
