import React, { Component } from 'react'
import {NavLink,Link, Route,Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import  * as setFns from "../store/indexstore/index.action"
import Car from "./children/car"
import Faxian from "./children/faxian"
import Huiyuan from "./children/huiyuan"
import Shouye from "./children/shouye"
import Wd from "./children/wd"
class Index extends Component {
    componentDidMount(){
      let {
         getdata
      }=this.props;
      getdata()
    }  
    render() {
        console.log(this.props,'indexstore');
        let{
            location:{
                pathname
            }
        }=this.props;
        return (
            <div className="index">
                <div className="header">
                   头部
                </div>
                <div className="content">
                    <div className="indexCt">
                          <Route path="/index/shouye" component={Shouye}></Route>
                          <Route path="/index/huiyuan" component={Huiyuan}></Route>
                          <Route path="/index/faxian" component={Faxian}></Route>
                          <Route path="/index/car" component={Car}></Route>
                          <Route path="/index/wd" component={Wd}></Route>
                    </div>
                </div>
                <div className="footer">
                  {
                    [{name:"首页",path:"/index/shouye"},
                    {name:"购物车",path:"/index/huiyuan"},
                    {name:"发现",path:"/index/faxian"},
                    {name:"我的",path:"/index/car"},
                    {name:"更多",path:"/index/wd"}].map((v,i)=>{
                        console.log('/index/shouye'.indexOf(pathname))
                        return <NavLink  to={v.path} key={i} className={'/index/shouye'.indexOf(pathname)!==-1&&i==0?'active':''}>
                           {v.name}
                        </NavLink>
                    })
                  }
                </div>
            </div>
        )
    }
}
let read=(store)=>{
    return store.IndexStore;
}
let set=(dispatch)=>{
    return   bindActionCreators({...setFns},dispatch)
}
export default  connect(read,set)(Index);