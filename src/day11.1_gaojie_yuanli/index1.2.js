
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            data:{
                name:"牛小牛",
                age:888
            },
            ...props
        }
    }
      render(){
          let {
              data
          }=this.state;
          return(
              <div>
                <li>姓名:   {data.name}</li> 
                <li>年龄:   {data.age}</li>  
              </div>
          )
      }
}
let bigData={
    indexData:{
        name:"我是index的数据",
        age:12
    },
    homeData:{
        name:"我是home的数据",
        age:18
    }
}
let changeData=()=>{//2.可以在该函数中，做一些操作，比如传个大的数据,取其中的一个
    return bigData.homeData;
}


let gaofn=(obj)=>{
    return (Zujian)=>{
        return class extends Component{
            constructor(props){
                super(props)
                this.state={
                    data:obj()
                }
            }
            render(){
                let{
                    data
                }=this.state;
                console.log(data)
                return <div>
                    llll
                    <Zujian data={data}></Zujian>
                </div>
            }
        }
    }
}

let newDom=gaofn(changeData)(Index);
//当参数数函数的时候


export default newDom;

