import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../store/indexstore/index.action"
import {Button,Input,Form} from "antd"
import "antd/dist/antd.css"

 class Index  extends Component {
     change=()=>{
         let {
            getdata
         }=this.props;
         let {
            validateFields
         }=this.props.form;
         validateFields((err,values)=>{
             console.log(err,values);
             getdata(values)
         })
     }
    render() {
        let FormItem =Form.Item;
        let {
           login
        }=this.props;
        let {
            getFieldDecorator
        }=this.props.form;
        console.log(this.props,'index3store')
        return (
            <div className="index"
            
              style={{
                  background:'url(katong.jpg)'
              }}
            >
                  <div className="login">
                      <Form> 
                             <FormItem>
                                 {
                                    getFieldDecorator(
                                        'username',
                                        {
                                            rules:[{required:true,message:'请输入用户名'}]
                                        }
                                    )(<Input placeholder="请输入账号"></Input>)
                                 }
                           
                             </FormItem>
                             <FormItem>
                             {
                                getFieldDecorator(
                                    'pwd',
                                    {
                                        rules:[{required:true,message:'请输入密码'}]
                                    }
                                )(<Input placeholder="请输入密码"></Input>)
                             }
                       
                         </FormItem>
                             <FormItem>
                               <Button onClick={()=>{
                                this.change();
                               }


                               }>登录</Button>
                             </FormItem>
                             <p 
                              style={
                                  login?{color:"green"}:{color:"red"}
                              }
                             >{login?"登陆成功":"登录失败"}</p>
                      </Form>
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
export default connect(read,set)(Form.create()(Index));