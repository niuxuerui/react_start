// import React, { Component } from 'react'
// import {Input,Button} from 'antd'
// import {connect} from "react-redux"
// import {bindActionCreators} from "redux"
// import * as setFns from "../../store/loginStore/login.action"
// class Shouji extends Component {
//     render() {
//         console.log('ssss',this.props);
//         return (
//             <div className="s">
                
//             <p><Input type="text" placeholder="请输入手机号"></Input></p>  
//             <p><Input type="password" placeholder="请输入密码"></Input></p> 
//             <p><Button>手机登录</Button></p>  
//             </div>
//         )
//     }
// }

// let read=(store)=>{
//     return store.LoginStore
// }
// let set=(dispatch)=>{
//     return bindActionCreators({...setFns},dispatch)
// }
// export default  connect(read,set)(Shouji);
import React, { Component } from 'react'
import ReactDOM from "react-dom"
import {Input,Button} from 'antd'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../../store/loginStore/login.action"
 class Shouji extends Component {
     constructor(){
         super()
         this.state={
             zValue:'',
             miValue:'',
             inErr:'内容不能为空',
             pwdErr:'内容不能为空'
         }
     }
     componentDidMount(){
       
    }

     inErrThing=()=>{//根据数据框的值，做出一些提示
        let{
            zValue
         }=this.state;
         if(zValue.length==0){
            this.setState({
                inErr:'内容不能为空'
            })
            this.in.style.color='orange'
         }else{
            this.setState({
                inErr:'正在输入'
            })
            this.in.style.color='skyblue'
         }
     }
     pwdErrThing=()=>{
        let{
            miValue
         }=this.state;
         if(miValue.length==0){
            this.setState({
                pwdErr:'内容不能为空'
            })
            this.pwd.style.color='orange'
         }else{
            this.setState({
                pwdErr:'正在输入'
            })
            this.pwd.style.color='skyblue'
         }
     }

    goYanZheng=()=>{//去验证
        let{
            zValue,
            miValue
        }=this.state;
        console.log(zValue ,'gogogogogog',miValue)
        let{
            bidui
        }=this.props;
        bidui({
            tl:zValue,
            mi:miValue
        },'tl','mi')
      
    }

    render() {
        let{
  
            pwdErr,
            inErr
        }=this.state;

        let {
        
            str,
            login,
            history:{
                push
            }
        }=this.props;

    
        return (
            <div className="s">
                
            <p><Input type="text"
                onChange={(e)=>{
                    this.setState({
                        zValue:e.target.value
                    },()=>{
                        this.inErrThing()
                    })
                }}
                placeholder="请输入账号/用户名"></Input>
            </p> 
            <div className="inErr" ref={(e)=>this.in=e}>{inErr}</div> 
            <p><Input type="password" 
                onChange={(e)=>{
                    this.setState({
                        miValue:e.target.value
                    },()=>{
                        this.pwdErrThing()
                    });
                }}
                placeholder="请输入密码"></Input>
            </p> 
            <div className="pwdErr" ref={(e)=>this.pwd=e}>{pwdErr}</div>
            <p><Button
              onClick={()=>{
                  this.goYanZheng();
                 
              }}
            >账号登录</Button></p>  
            <div className="fnErr" ref={(e)=>this.fn=e} style={{color:str=='登录成功'?'skyblue':'orange'}}>{str}</div>
            
            {
                login?push('/index/my'):null
            }
            </div>
        )
    }
}
let read=(store)=>{
    return store.LoginStore
}
let set=(dispatch)=>{
    return bindActionCreators({...setFns},dispatch)
}
export default  connect(read,set)(Shouji);