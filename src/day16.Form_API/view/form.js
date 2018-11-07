import React, { Component } from 'react'
import {Input,Button} from "antd"
import "antd/dist/antd.css"

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            dd:88888888888
        }
    }
    show=()=>{
        console.log(this.l)
    }
    
    render() {
        let {
            dd
        }=this.state;
        return (
            <div>
                 Form
                 <Input></Input>
                 <p>用户名/账号/手机号</p>
                 <Input defaultValue={'888'} value={dd}  onChange={
                    (e)=>{
                       console.log(e.target.value);
                       this.setState({
                           dd:e.target.value
                       })
                    }   
                    
                   } ref={(e)=>{return this.l=e}}></Input>
                 <p>密码</p>
                    <Button onClick={
                     ()=>{
                         this.show()
                     }   
                     
                    }>登录</Button>
            </div>
        )
    }
}
