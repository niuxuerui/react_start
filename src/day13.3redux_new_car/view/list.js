import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import * as sendFns from "../store/list.action"
import "../mock/mock"
import {Button} from "antd"
 class List extends Component {
     componentDidMount(){
        let {
            ax,
            data
        }=this.props;
        console.log('data',data)
        data.length===0&&ax();
     }
    render() {
      let{
        data,
        changeCount,
        sum
      }=this.props;
      console.log('data',data)
        console.log('props',this.props);
        return (
            <div className="list">
                {
                    data.length>0&&data.map((v,i)=>{
                        return <li key={i}>
                          <div className="info">
                            <h3>商品名称：{v.name}</h3>
                            <div className="infobt">
                             <span>价格：{v.price}</span>
                               {
                                   v.count>0?<div>
                                     <Button className="jian"
                                     onClick={
                                        ()=>{
                                            changeCount(i,'jian',sum);
                                        }
                                    }
                                     >-</Button>
                                     <span>{v.count}</span> 
                                     <Button
                                     onClick={
                                        ()=>{
                                            changeCount(i,'add',sum);
                                        }
                                    }
                                     >+</Button>
                                   </div>:<Button className="addcar"
                                    onClick={
                                        ()=>{
                                            changeCount(i,'add',sum);
                                        }
                                    }
                                   >加入购物车</Button>
                               }
                              
                              
                               
                            </div>
                          </div>
                        </li>
                    })
                }
            </div>
        )
    }
}
let read=(store)=>{
    return store.ListStore;
}
let set=(dispatch)=>
{
    return bindActionCreators({...sendFns},dispatch);
}
export default connect(read,set)(List);
