import React, { Component } from 'react';
import {connect} from "react-redux";
import * as sendData from "./store/index/index.action";

 class Index extends Component {
     componentDidMount(){
         let {
             setData
         }=this.props;

         setData({data:[1,2,3,4]});
         
     }
    render() {
        let {
          data
        }=this.props;
        console.log("props",this.props);//抛过来的数据
        return (
            <div>
                index
            </div>
        )
    }
}

let newDom=connect((store)=>{//返回整个数据库
   return store.IndexStore;
},(dispatch)=>{
      return {
        setData:()=>{
          dispatch(sendData.IndexAction()) 
        }
      } 
})(Index);

export default newDom;

{

//在connect的作用域下
//  let obj= argument[0](stroe);   //回传一个 数据库

//  return class extends Component{
//      render(){
//          <div>
//              <Index {...obj}></Index>     在connect的函数参数return 的数据，才可以传到Index
//          </div>
//      }
//  }

}