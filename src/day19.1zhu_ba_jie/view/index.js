import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as setFns from '../store/Indexstore/index.action'
import Content from "./content"
import Leixing from "./son/leixing"
import Lingyu from "./son/lingyu"
import City from "./son/city"
 class Index extends Component {
     componentDidMount(){
         let {
            getdata,
            gettype
         }=this.props;
         getdata();
         gettype();
     }
    render() {
        let{
            data:{
                allData
            },
            alltype:{
                leixingArr,
                lingyuArr,
                cityArr
            }
        }=this.props;
        console.log(this.props,'indexstore')
        return (
            <div className="index">
                index

                <div className="box">
                    <div className="header">
                      
                      <div className="all"><b>全部结果</b></div>
                      <div className="leixing">全部分类</div>
                      {
                        // <div className="lingyu">全部领域</div>
                      }
                     
                    </div>

                    <div className="zi">
                      <div className="biao">子分类</div>
                      <Leixing data={leixingArr}></Leixing>
                    </div>
                    <div className="li">
                      <div className="biao">领域</div>
                      <Lingyu data={ lingyuArr?lingyuArr[0]['lingyu']:[]}></Lingyu>
                    </div>
                    <div className="suo">
                      <div className="biao">所在地</div>
                      <City data={cityArr}></City>
                    </div>
                </div>
                <Content></Content>
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
export default connect(read,set)(Index) ;
