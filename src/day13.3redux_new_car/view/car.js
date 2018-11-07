import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import * as sendFns from "../store/list.action"
import {Button,Checkbox} from "antd"
import { Link } from "react-router-dom"
class Car extends Component {
    componentDidMount(){

    }
    render() {
        let{
            data,
            changeCount,
            sum,
            changeState,
            changeAll,
            all,
            pricesum
          }=this.props;
        return (
            <div className="car">
             <div className="carConent">
             
            {
                data.length>0&&data.map((v,i)=>{
                    if(v.count>0){
                        return <li key={i}>
                        <div className="info">
                          <div>
                            <Checkbox checked={v.state}
                               onChange={
                                   (e)=>{
                                    changeState(i,e.target.checked)
                                    console.log('wcwcwcw')
                                   }
                               }
                            ></Checkbox>
                          </div>
                        <Link to={`/detail/${v.id}`}> 
                           <h3>商品名称：{v.name}</h3>
                        </Link>  
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
                    }else{
                        return null;
                    }
                   
                })
            }
            </div>
              <div className="allChecked">
                 <Checkbox
                 onChange={
                     (e)=>{
                         changeAll(e.target.checked)
                     }
                 }
                  checked={all}></Checkbox>
                 <span >全选</span>

                 <span className="sumprice">总价：{pricesum}元</span>
              </div>
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
export default connect(read,set)(Car);
