import React, { Component } from 'react'
import {BrowserRouter,Route,Redirect} from "react-router-dom"
// import Index from "../view/index.1"
// import Index from "../view/index.2"
import Index from "../view/index.3"
export default class RouteConfig extends Component {
    render() {
        // Math.max.apply(Math,arrn)
        //   new Object()
        return (
            <BrowserRouter>
              <div className="wrap">
                 <Route path="/" render={()=>{return <Redirect to="/index"/>}} exact></Route>
                 <Route path="/index" component={Index}></Route>
              </div>
            </BrowserRouter>
        )
    }
}
