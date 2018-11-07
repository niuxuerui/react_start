import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../store/IndexStore/index.action"
import {withRouter,Link} from "react-router-dom"
import Loding from "./common/loding"
 class Detail extends Component {
     constructor(){
         super()
         this.state={
             detailData:[]
         }
     }
     componentDidMount(){
        let {
            getdata
        }=this.props;
        getdata('detail');
     }
     componentWillUnmount(){
         console.log('s,mfnadsjknvjavffvjl');
         let {
           RRR
        }=this.props;//离开的时候 把 loding动画状态复原
        RRR();
     }

    render() {
        let {
            match,
            data,
            isLoding
        }=this.props;
        console.log('detail',this.props);
          let b=data?data[match.params.type][match.params.id]:null;
 
        return (

            <div className="detail">
            <Loding isLoding={isLoding}>
            
                {
                    // `999${match.params.id}9999${match.params.type}`
                }
                <div className="header">

                <Link to="/index/movie/hot"> 《 </Link>

                详情页</div>

                <div className="content">
                    {
                        b&&<div className="ct">
                            <img src={b.img} alt=""/>
                            <h4>{b.title}</h4>
                            <p>{b.des}</p>
                            <p>观众评分：{b.fen}</p>
                        </div>
                    }
                    
                </div>
            </Loding>
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
export default  connect(read,set)(withRouter(Detail));
