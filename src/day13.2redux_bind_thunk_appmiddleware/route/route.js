import {BrowserRouter,Route,Link} from "react-router-dom";
import React, { Component } from 'react'
import Index from "../view/index"

export default class RouteConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                 <div>
                     <Route path="/" component={Index}></Route>
                 </div>
            </BrowserRouter>
        )
    }
}
