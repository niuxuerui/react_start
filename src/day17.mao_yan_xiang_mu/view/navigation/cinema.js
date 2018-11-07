import React, { Component } from 'react'
import {Input} from  'antd'
import "antd/dist/antd.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../../store/cinema/cinema.atcion"
 class Cinema extends Component {
    constructor(props){
        super(props)
       this.state={
      
       }
    }
    componentDidMount(){
        let {
            getdata,
            cinemaData
        }=this.props;
        getdata();
    }
    changeMark=(flag,n,fn)=>{
        let {
            changeMark
        }=this.props;
        changeMark(flag,n,fn);
    }
    changeMenu=(flag,fn)=>{
        let{
            changeMenu
        }=this.props;
        changeMenu(flag,fn)
    }
    render() {
        let {
            cinemaData,
            cinemaType,
            classifyDefault,
            clIndex
        }=this.props;

        // let{
        //     classifyDefault
        // }=this.state;
        console.log(this.props,'cinema');
  
        return (
            <div className="cinema">
                <div className="control"> 
                <div className="city" onClick={()=>{console.log(1)}}>北京</div>
                
                    <div className="search">
                        <Input placeholder="搜影院"></Input>
                    </div>
                
                </div>
                <div className="classify">
                {
                    ['全城','品牌','特色'].map((v,i)=>{
                      return   <span 
                        key={i}
                        className={clIndex===i?'classifyAction':''}
                        onClick={()=>{
                            //加类名
                     
                            //切换显示和隐藏遮罩层
                        //  this.changeMark(null,(now)=>{//函数式编程
                        //      return !now;
                        //  });
                         this.changeMark(true,i);
                        //  this.changeMenu(null,(now)=>{
                        //     return !now;
                        // });
                        this.changeMenu(true);
                        }}
                        >{v}</span>
                    })
                }
                  
                </div>
                <div className="ct">
                    {
                        cinemaData&&cinemaData.length>0&&cinemaData.map((v,i)=>{
                            if(cinemaType){
                                if(cinemaType.str==v[cinemaType.type]){
                                    return(
                                        <li key={i}>
                                        <h3>{v.l} <span>{v.price}元起</span></h3>
                                        <p> <span>{v.city}</span><span>{v.pinpai}</span> <span>{v.tese}</span></p>
                                        <p>{v.des}</p>
                                   </li>
                                    )
                                }
                            }else{//没有选择类型的时候
                                return( <li key={i}>
                                    <h3>{v.l} <span>{v.price}元起</span></h3>
                                    <p> <span>{v.city}</span> <span>{v.pinpai}</span><span>{v.tese}</span></p>
                                    <p>{v.des}</p>
                               </li>)
                            }
                          
                        })
                    }
                </div>
            </div>
        )
    }
}
let read=(store)=>{
    return store.CinemaStore
}
let set=(dispatch)=>{
    return bindActionCreators({...setFns},dispatch)
}
export default  connect(read,set)(Cinema);
