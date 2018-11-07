import axios from "axios"
export const getdata=(str)=>{
    return (dispatch,getstate)=>{
        axios.get("/movie").then(res=>{
            dispatch({
                type:"data",
                data:res.data//获取两个模拟的数据
            })
            // fn&&fn();
            // console.log(fn,'fnfnfn')
          if(str==='detail'){
            dispatch(LLL());//控制loding
          }
       
        })
   
    }
}
export const LLL=()=>{
    return (dispatch,getstate)=>{
        setTimeout(()=>{
            dispatch({
                type:'loding',
                data:false
            })
        },2000)
    }
}
export const RRR=()=>{
    return (dispatch,getstate)=>{

            dispatch({
                type:'loding',
                data:true
            })
 
    }
}
export const getMaoYanData=()=>{
    return (dispatch,getstate)=>{
       axios.get("/mao").then(res=>{
           console.log('nananaananan',res)//获取猫眼数据
        dispatch({
            type:"maoyan",
            data:999
        })
       })
     
    }
}
export const getHeader=(e)=>{
    return (dispatch,getstate)=>{
        dispatch({
            type:"header",
            data:e=='猫眼电影'?"影院":"猫眼电影"
        })
    
     
    }
}
// export const getMovie=()=>{
//     return (dispatch,getstate)=>{//获取正在上映还是即将上映的
//         let data=getstate().IndexStore.data;//注意要在页面先请求一次mock数据 才会有data
//         dispatch({
//             type:"movie",
//             data:data[]
//         })
     
//     }
// }