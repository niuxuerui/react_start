import React, { Component } from 'react'
import {Input,Form,Button} from "antd";
import "antd/dist/antd.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../store/indexstore/index.action"

const FormItem =Form.Item;

class Index extends Component {
    componentDidMount(){
    
    }

 change=()=>{
     console.log(11)
    let {
        validateFields
    }=this.props.form;
    validateFields((err,values)=>{
        console.log(values)
    })
 }

    render() {
   let {
   getFieldDecorator
   }=this.props.form;
        console.log('indexstore',this.props.form)
     
        return (
            <div className='index' 
              style={{background:"url('/katong.jpg')",backgroundSize:'100% 100%'}}
            >
                index
                <div className="login">
                  
                   
                    <Form>
                    <FormItem
                    
                    
                    >
                       {
                         getFieldDecorator(
                             "username",
                             {
                                 rules:[{required:true,message:'请输入用户名'}]
                             }
                         )(
                             <Input></Input>
                         )
                       }
                    
                     </FormItem>
                
                     
                       <FormItem>
                          <Button onClick={()=>{
                           this.change()
                          }}>登录</Button>
                       </FormItem>
                </Form>
                </div>
            </div>
        )
    }
}
let read=(store)=>{
    return store.IndexStore;
}
let set=(dispatch)=>{
    return bindActionCreators({...setFns},dispatch)
}
export default connect(read,set)(Form.create()(Index)) ;
