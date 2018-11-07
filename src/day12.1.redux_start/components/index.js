import React, { Component } from 'react'
import {connect} from "react-redux";
import * as ChangeIndex from "../store/index/index.action"

class Index extends Component {
    render() {
        let {
            data,
            changeColor
        }=this.props;
        console.log(this.props,data);
        return (
            <div>
                Index
                {
                    data&&data.length>0&&data.map((v,i)=>{
                        return <div key={i}
                          style={{width:v.width,height:v.height,background:v.color,display:'inline-block'}}
                          onClick={()=>{
                              
                              data[i].color= data[i].color==='blue'?'red':'blue';
                              console.log(data,'data')
                              changeColor(data);
                          }}
                        >{v.name}</div>
                    })
                }
            </div>
        )
    }
}

let readStore=(store)=>{
     return  store.IndexStore;
}
let changeStore=(dispatch)=>{
    return {
         changeColor:(cl)=>{
            dispatch(ChangeIndex.changeColor(cl));
         }
    }
}

export default connect(readStore,changeStore)(Index);
//3.连接数据库 读取数据
