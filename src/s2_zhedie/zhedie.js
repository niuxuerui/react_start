import React, { Component } from 'react'
import Son from "./son"
export default class Zhedie extends Component {
    constructor(props){
      super(props)
     this.state={
          data:{
              name:'逆序雪瑞',
              age:"18",
              arr:[],
              flag:false
          }
     }
    }
    render() {
        let {
         data
        }=this.state
        return (
            <div>
                zhedei
                <h4>点击下拉</h4>
                <div className="Zhedie" 
                 onClick={
                     ()=>{
                         let {
                            data
                         }=this.state;
                         data.flag=!data.flag
                         this.setState({
                             data
                         })
                    }
                 }
                style={{height:data.flag?'300px':'100px'}}>
                   <li>{data.name}</li>
                   <li>{data.age}</li>
                   <Son wt={data.name}></Son>
                </div>
            </div>
        )
    }
}
