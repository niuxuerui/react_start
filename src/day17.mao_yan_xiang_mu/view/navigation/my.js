import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../../store/loginStore/login.action"
class My extends Component {
    componentDidMount(){
        let{
            login,
            history:{
                push
            }
        }=this.props;
        console.log(login,'mymymymloginllll');
        if(!login){//未登录
            push('/login/zhanghao')
        }
    }
    render() {
        let{
            login
        }=this.props;
        console.log(this.props,'mymymymlogin')
        return (
            <div className="my">
                <div className="header">
                   <h3>
                     <span>我的</span>
                   
                   </h3>
                   <dl>用户头像</dl>
                </div>
                <div className="ct1">
                  <h4>我的订单</h4>
                  <div className="ct1_yuan">
                      <dl>
                        <dd><i className="icon iconfont icon-icon_saoma-mian"></i></dd>
                        <dt>电影</dt>
                      </dl>
                      <dl>
                        <dd><i className='icon iconfont icon-icon_guowuche-mian'></i></dd>
                        <dt>商城</dt>
                      </dl>
                  </div>
                </div>
            </div>
        )
    }
}
//判断是不是登录状态 确定跳转那个页面
let read=(store)=>{
    return store.LoginStore
}
let set=(dispatch)=>{
    return bindActionCreators({...setFns},dispatch)
}
export default  connect(read,set)(My);
