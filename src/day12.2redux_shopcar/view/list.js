import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from "axios"
import * as sendList from "../store/List/list.action"



class List extends Component {
    componentDidMount(){
        let {
           setList
        }=this.props;
        axios.get("/data").then(res=>{
            console.log(this.props)
            setList(res.data.data.data)
        })
    }
    render() {
        let {
           data,
           sum,
           addfn,
           addshow,
           showdata
        }=this.props;
        console.log(data,'props ddata');
        return (
            <div className="list">
                list
                { console.log(data,'datata')}
                {
                   
                    data&&data.length>0&&data.map((v,i)=>{
                        return <li key={i}>
                        {v.name}
                        {v.price}
                        {v.count}
                        <p
                        onClick={()=>{
                            sum++;
                            addfn(sum);
                            addshow(v,showdata);
                            console.log(1)
                        }}
                        >加入购物车</p>
                        </li>
                    })
                }
                lalalal:{sum}
            </div>
        )
    }
}
let readStore=(store)=>{
    return store.listStore;
}
let setStore=(dispatch)=>{
      return {
          setList:(cl)=>{
             dispatch(sendList.setList(cl))
          },
          addfn:(sum)=>{
            dispatch(sendList.add(sum))
          },
          addshow:(data,showdata)=>{
              //判断是否已经添加进去该水果类型了
              let newdata=showdata.filter((v,i)=>{
                  return v.id==data.id
              })
              if(newdata.length){
                  showdata=showdata.map((v,i)=>{
                        if(v.id==data.id){
                             v.count++
                        }
                        return v
                  })

              }else{
                  showdata.push({...data,count:1})
              }
            console.log(788);
       
            dispatch(sendList.addshow(showdata));
          }
      }
}
export default connect(readStore,setStore)(List);
