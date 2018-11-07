import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../store/loginStore/login.action"
import Zhanghao from "./login/login.z"
import Shouji from "./login/login.s"

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            ac:0
        }
    }
    componentDidMount(){
        let {
           login
        }=this.props;
        console.log('//////////',this.props)
    }
    render() {
        let{
          login
        }=this.props;
        let {
            ac
        }=this.state;
        console.log('login',login)
        return (
            <div className="login">
                <div className="header">
                    <Link to="/index/my"><i className="icon iconfont icon-icon_fenxiang-mian"></i></Link>
                    猫眼电影
                </div>
                <div className="bar">
                    {
                        [{str:'美团账号登录',p:'/login/zhanghao'},
                        {str:'手机号码登录',p:'/login/shouji'}].map((v,i)=>{
                            return<Link key={i} to={v.p}
                             className={ac===i?'barActive':''}
                             onClick={()=>{
                                 this.setState({
                                     ac:i
                                 })
                             }}
                             >
                                {v.str}
                            </Link>
                        })
                    }
                    
                </div>
                <div className="content">  
                   <Route path="/login/zhanghao" component={Zhanghao}></Route>
                   <Route path="/login/shouji" component={Shouji}></Route>
                 
                </div>
            </div>
        )
    }
}
let read=(store)=>{
    return store.LoginStore
}
let set=(dispatch)=>{
    return bindActionCreators({...setFns},dispatch)
}
export default  connect(read,set)(Login);
