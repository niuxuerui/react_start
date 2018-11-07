import React, { Component } from 'react'
import {Route,Link,Redirect} from "react-router-dom"
import Movie from "./navigation/movie"
import Cinema from "./navigation/cinema"
import My from "./navigation/my"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../store/IndexStore/index.action"

import {withRouter} from "react-router-dom"

 class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            footerArr:[{
                p:"/index/movie/hot",
                ct:'电影',
                cl:'icon iconfont icon-icon_saoma-mian'
            },{
                p:"/index/cinema",
                ct:'影院',
                cl:'icon iconfont icon-icon_wode-mian'
            },{
                p:"/index/my",
                ct:'我的',
                cl:"icon iconfont icon-icon_shuocang-mian"
            }],
            dd:[],
            markarr:[
                {
                    type:"city",
                    arr:['北京',"上海",'天津']
                },
                {
                    type:"pinpai",
                    arr:['腾讯','爱奇艺',"优酷"]
                },
                {
                    type:"tese",
                    arr:['爱情',"喜剧",'亲情']
                }
            ]
            ,
            markIsShow:false,
            menu:false,
            cinema:null,
            clIndex:'jia'
        }
    }
    componentDidMount(){
        let {
            getdata,

            history:{
                location:{
                    pathname
                }
            }
     
        }=this.props;
        getdata();
 

    
    }
    changeMark=(flag,n,fn)=>{//控制遮罩层是否显示
        console.log('nnnnnn',n)
        let{
            markIsShow
        }=this.state;
        let bt=null;
        if(fn){
           bt= fn(markIsShow);//当前状态
        }
    
        this.setState({
            markIsShow:fn?bt:flag
        })
        if(n!=='jia'){//不是默认值的时候
            this.setState({
                clIndex:n
            },()=>{
                console.log(this.state.clIndex,'666666666')
            }) 
        }
   
    }
    changeMenu=(flag,fn)=>{//控制遮罩层菜单是否显示
        let{
            menu
        }=this.state;
        let bt=null;
        if(fn){
           
            bt= fn(menu);//当前状态
         }
        this.setState({
            menu:fn?bt:flag
        })
   
    }
    changeCinema=(str)=>{//控制cinema页的筛选数据
        let {
            cinema
        }=this.state;
        this.setState({
            cinema:str
        })
    }
    render() {
        let {
            footerArr,
            header,
            markIsShow,
            menu,
            cinema,
            markarr,
            clIndex
        }=this.state;
        let{
            history:{
                location:{
                    pathname
                }
            },
            RRR
        }=this.props;
        console.log('indexstore',this.props);
        console.log('fafaffaaf', pathname)
        return (
            <div className="index">
            {
                //控制遮罩层
                markIsShow&&<div className="mark"
                onClick={()=>{
                    this.changeMark(false);
                    this.changeMenu(false)
                }}
                >
                </div>
            }
           {
               //遮罩层选择类型
             menu&&<div className="markmenu">

             {
                 markarr.map((v,i)=>{
                     return(
                         <li key={i}>
                         {
                            v.arr.map((vv,ii)=>{
                                return (
                                    <span
                                    key={ii}
                                    onClick={(e)=>{
                                      
                                      
                                    this.changeMark(false);
                                    this.changeMenu(false);
                                    this.changeCinema({str:e.target.innerText,type:v.type})
                                   
                                    }}
                                    >{vv}</span>
                                )
                            })
                         }
                         </li>
                     )
                 })
             }
                    

                    <h4>选择类型</h4>
             </div>
           }
                {
                    //判断是哪个页面 渲染不渲染头部
                    pathname.indexOf("/index/my")!==-1?null:<div className="header">
                        {
                            pathname.indexOf("/index/movie")!==-1?'猫眼电影':pathname.indexOf("/index/cinema")!==-1?'电影':''
                        }
                     </div>
                }
               
                <div className="content">
                   <div className="scroll">
  
                    <Route path="/index/movie" component={Movie}></Route>
                    <Route path="/index/cinema" component={()=><Cinema
                        changeMark={this.changeMark}
                        changeMenu={this.changeMenu}
                        cinemaType={cinema?cinema:null}
                        clIndex={clIndex}
                        />}></Route>
                    <Route path="/index/my" component={My}></Route>
                   </div>
                </div>
                <div className="footer">
                      {
                        footerArr&&footerArr.length>0&&footerArr.map((v,i)=>{
                            let b=i==0?'/index/movie':v.p;//这是根据路由变化，添加类名

                            return  <Link key={i} to={v.p}
                            className={pathname.indexOf(b)!==-1?'footerActive':''}
                            onClick={
                                ()=>{
                                    RRR()
                                }
                                }
                            >
                            <i className={v.cl}></i>
                            <span>{v.ct}</span>
                            </Link>
                            
                          
                        })
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
export default  connect(read,set)(withRouter(Index));
