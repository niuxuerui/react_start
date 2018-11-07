import React, { Component } from 'react'
import {Input,Form,Button} from "antd";
import "antd/dist/antd.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../store/indexstore/index.action"

const FormItem=Form.Item;//1.

class Index extends Component {
    componentDidMount(){
        // let {
        //  getdata
        // }=this.props;
        // getdata();
    }
    change=()=>{
        let {
            validateFields
        }=this.props.form;
         let {
         getdata
        }=this.props;
    
        validateFields((err,values)=>{
console.log(err,values);
        getdata(values)
        });
    }
    render() {
        let {
            getFieldDecorator
        }=this.props.form;
        let {
            login
        }=this.props;
        console.log('indexstore',this.props)
        console.log('index form',this.props.form);
        console.log('yanzhaneg',null==undefined)
        return (
            <div className='index' 
              style={{background:"url('/katong.jpg')",backgroundSize:'100% 100%'}}
            >
                index
                <div className="login">
                    <Form>
                        <FormItem>
                            {
                                getFieldDecorator(
                                   'username',
                                   {
                                       rules:[{required:true,message:'账号不能为空'}]
                                   }
                                )(

                                    <Input placeholder="账号"></Input>
                                )
                            }
                                
                            
                        </FormItem>
                        <FormItem>
                        {
                            getFieldDecorator(
                               'pwd',
                               {
                                   rules:[{required:true,message:"密码不能为空"}]
                               }
                            )(

                                <Input placeholder="密码"></Input>
                            )
                        }
                            
                        
                    </FormItem>
                    <FormItem>

                  <Button  
                  onClick={
                      ()=>{
                        this.change()
                      }
                     
                  }>
                   登录
                  </Button>
                    {
                        login?<p className="err">登陆成功</p>:<p className='err'>请登录</p>
                    }
                    
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
