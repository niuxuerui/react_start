import {BrowserRouter,Route,Redirect} from "react-router-dom"
import React, { Component } from 'react'
import Index from "../view/index"
import Detail from "../view/detail"
import Detai from "../view/detail";
import "../css/index.css"
export default class RouteConfig extends Component {
    render() {
        return (
            <BrowserRouter>
               <div className="router">
                  <Route path="/" render={()=>{
                      return <Redirect  to="/index/list"/>
                  }} exact></Route>
                  <Route path="/index" component={Index}></Route>
                  <Route path="/detail/:id" component={Detai}></Route>
               </div>
            </BrowserRouter>

        )
    }
}
