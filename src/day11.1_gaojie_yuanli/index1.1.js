//1.高阶组件的原理
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
            ...props//4.这样就可以通过高阶函数传参的方式，修改子组件Index的数据
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

let gaofn=(obj)=>{
    return (Zujian)=>{
        return class extends Component{//3.通过 被包裹的父组件 进行传参
            constructor(props){
                super(props)
                this.state={
                    data:obj
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

let newDom=gaofn({
    name:"牛小雪",
    age:999
})(Index);

//2.最后返回一个经过处理的组件
console.log(newDom);

export default newDom;

