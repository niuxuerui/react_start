import React, { Component } from 'react'
import {connect} from "react-redux"
class Shouye extends Component {
    render() {
        console.log('this is  shouye',this.props);
        let {
           data:{
               list
           }
        }=this.props;
        return (
            <div>
                shouye
                {
                    list&&list.length>0&&list.map((v,i)=>{
                        return <li key={i}>
                            {v.name}
                        </li>
                    })
                }
            </div>
        )
    }
}
let read=(store)=>{
   return store.IndexStore
}
export default  connect(read)(Shouye);