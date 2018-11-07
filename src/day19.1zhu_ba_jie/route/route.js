import React, { Component } from 'react'
import {BrowserRouter,Route,Redirect} from "react-router-dom"
import Index from "../view/index"
export default class RouteConfig extends Component {
    render() {
        return (
            <BrowserRouter>
              <div className="wrap">
                <Route path="/" render={()=>{return <Redirect to="/index"/>}} exact></Route>
                <Route path='/index' component={Index}></Route>
              </div>
            
            </BrowserRouter>
        )
    }
}
