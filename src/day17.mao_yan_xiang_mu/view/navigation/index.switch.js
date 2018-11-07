import React, { Component } from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from "../../store/IndexStore/index.action"
import Loding from "../common/loding"

 class IndexSwitch extends Component {
     constructor(props){
         super(props)
         this.state={
             indexSwitchData:[]
         }
     }
     componentWillMount(){
        //      let {
         
        //     RRR
        // }=this.props;
        // RRR();
     }
    componentDidMount(){
        let {
            data,
            match,
            LLL
        }=this.props;
        this.setState({
            indexSwitchData:data[match.params.id]
        });
        LLL();//结束loding
        // console.log('daa',data[match.params.id])
    }
    componentWillUpdate (){
        console.log('jehvuervbeubvhfvhsbdkjvbsdhfvj');
    //     let {
    //         LLL
    //     }=this.props;
    //    LLL();
    }
    componentDidUpdate (){
        console.log('jehvuervbeubvhfvhsbdkjvbsdhfvj');
        // let {

        //     RRR
        // }=this.props;
        // RRR();
    }
    componentWillUnmount(){
        //  let {
 
        //     RRR
        // }=this.props;
        // RRR();
    }
    render() {
        let {
            match
        }=this.props;
        let {
            indexSwitchData
        }=this.state;
        
        // console.log('propsllll', indexSwitchData)
        return (
            <div>
            <Loding>
                {
                    indexSwitchData&&indexSwitchData.length>0&&indexSwitchData.map((v,i)=>{
                        return <li key={i}>
                            
                            <img src={v.img} alt=""/>
                            <dl>
                               <dd>
                               <Link to={`/detail/${i}/${match.params.id}`}>
                                 <h4>{v.title}</h4> 
                                 </Link>
                                 <p>{v.des}</p>
                                 <p>观众评分：{v.fen}</p>
                               </dd>
                            </dl>
                          
                            
                        </li>
                    })
                }
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
export default  connect(read,set)(withRouter(IndexSwitch))