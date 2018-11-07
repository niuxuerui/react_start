import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as sendFns from "../store/list.action"
import {Badge,Spin,Button} from "antd"
import "antd/dist/antd.css"
import {Link} from "react-router-dom"
 class Detai extends Component {
     constructor(props){
         super(props)
         this.state={
             flag:true
         }
     }
    componentDidMount(){
        let {
            getDetail,
            detailData,            
            match
        }=this.props;
       getDetail(match.params.id*1,this.change);
       
    }
    change=()=>{//结束蒙层
        this.setState({
            flag:false
        })
    }
    render() {
        let {
            getDetail,
            detailData,            
            match,
            sum , //总计多少商品,
            changeCount
        }=this.props;
        let {
            flag
        }=this.state;
        console.log('detailprops',this.props)
        return (
            <div className="detail">
                <div className="detailHeader">
                  商品详情
                </div>
                {
                    <div className="detailTop">
                        <Spin spinning={flag} size="large" tip="Loading...">
                            <h3>名字：{detailData.name}</h3>
                            <h3>价格：{detailData.price}</h3>
                            <h3>已选：{detailData.count}</h3>
                        </Spin>
                   
                    </div>
                   
                }
                <div className="detailBottm">
                        <div className="detailsum">
                            <Link to={'/index/car'}>
                          <Badge count={sum}></Badge>
                            </Link>
                        </div>
                        <Button className="backCar"
                        onClick={
                            ()=>{
                                changeCount(match.params.id*1,'add',sum);
                            }
                        }
                        >加入购物车</Button>
                </div>
                
            </div>
        )
    }
}
let read=(store)=>{
    return store.ListStore;
}
let set=(dispatch)=>
{
    return bindActionCreators({...sendFns},dispatch);
}
export default connect(read,set)(Detai);
