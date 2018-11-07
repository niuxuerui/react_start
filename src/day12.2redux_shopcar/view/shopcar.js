import React, { Component } from 'react'
import {connect} from "react-redux"
import {Checkbox} from "antd";
import * as fns from "../store/List/list.action"
import "../css/index.css"

class Shopcar extends Component {
    render() {
        let {
            data,
            sum,
            showdata,
            caradd,
            all,
            allsum
        }=this.props;
        console.log(showdata,"showdata")
        console.log(this.props,"carcarcar")
        return (
            <div>
                Shopcar 展示商品
               <hr/>

               {
                   showdata&&showdata.length>0&&showdata.map((v,i)=>{
                       return <li key={i}>
                       <Checkbox checked={v.state}/>
                       {v.name}
                       <button
                         onClick={()=>{ 
                             console.log(11)
                              caradd('jian',i,showdata);
                         }}
                       >-</button>
                       {v.count}
                       <button
                       onClick={()=>{
                        caradd('jia',i,showdata);
                        }}
                       >+</button>
                       </li>
                   })
               }

               <button
               className="btn"
               onClick={()=>{
                console.log(666);
                all(showdata,allsum)
               }
                  
               }
               > 计算总价</button>
               <b>{allsum}</b>
            </div>
        )
    }
}
export default connect((store)=>{
    return store.listStore
},(dispatch)=>{
   return {
       caradd:(type,i,showdata)=>{
           if(type=='jia'){
         
            showdata[i].count++;
            console.log("jia" ,showdata)  
            dispatch(fns.caradd([...showdata]))
           }else if(type=="jian"){
            showdata[i].count--;
            dispatch(fns.caradd([...showdata]))
           }
           
       },
       all:(data,allsum)=>{
           console.log(data,'cacacaca')
          data&&data.length>0&& data.map((v,i)=>{
               console.log('allsum',v,i)
              allsum+=v.price*v.count
           })
           console.log(allsum,'allsum')
         dispatch(fns.all(allsum));
       }
   }
})(Shopcar)
