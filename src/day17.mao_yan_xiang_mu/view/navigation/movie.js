import React, { Component } from 'react'

import IndexSwitch from "./index.switch"
import {withRouter,Link,Route} from 'react-router-dom'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../../store/IndexStore/index.action"
import Loding from "../common/loding"


class Movie extends Component {
    constructor(props){
        super(props)
        this.state={
            switchActive:1
        }
    }
    switchClass=(e)=>{
        console.log(typeof e.target.getAttribute('data-id'));
        this.setState({
           switchActive:e.target.getAttribute('data-id')
        })
    }
    componentWillMount(){
        // let {
        //     RRR
        // }=this.props;
        // RRR();
    }
    render() {
        let {
            switchActive
        }=this.state;
        let {
           RRR
        }=this.props;
        return (
            <div className="movie">
                <div className="control"> 
                      <div className="city">北京</div>
                      <div className="switch">
                           <Link data-id={1}
                           onClick={
                            (e)=>{
                                this.switchClass(e);
                               RRR();
                            }
                          }
                           to="/index/movie/hot"
                            className={switchActive==1?'swatchActive':''
                        }>正在上映</Link>
                           <Link data-id={2} 
                           to="/index/movie/future"
                           className={switchActive==2?'swatchActive':''}
                           onClick={
                            (e)=>{
                                this.switchClass(e);
                                RRR();
                            }
                          }
                           >即将上映</Link>
                      </div>
                      <div className="search"><i className="icon iconfont icon-icon_zuozou-mian"></i></div>
                </div>
                <div className="movie_ct">
                    <Route path="/index/movie/:id" component={() => <IndexSwitch />} ></Route>
                    {

                        // 内部执行的是一个函数 单纯的函数return，和生命周期没有任何关系，所以不会触发
                    
                    }
                </div>
            </div>
        )
    }
}
let read=(store)=>{
    return store.IndexStore
}
let set=(dispatch)=>{
    return bindActionCreators({...setFns},dispatch)
}
export default  connect(read,set)(withRouter(Movie))