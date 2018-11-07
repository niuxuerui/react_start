import React, { Component } from 'react'
import {BrowserRouter,Route,Redirect} from "react-router-dom"
import Index from "../view/index"

class RouteConfig extends Component {
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

export default  RouteConfig;
