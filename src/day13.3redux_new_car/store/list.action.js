import axios from "axios"
export const ax=(data)=>{
    return (dispatch,getstate)=>{
      axios.get("/list").then(res=>{
          console.log(res,'mock');
             dispatch({
                type:"list",
                data:res.data
             })
 
      })
  
    }
}

export const changeCount=(index,type,sum)=>{//选中后的加加减减
    return (dispatch,getstate)=>{
       
       let data=getstate().ListStore.data;
       let pricesum=getstate().ListStore.pricesum;

       if(type==="add"){
        data[index].count++;
        sum++;
        if(data[index].state)pricesum+=data[index].price
       }
       if(type==="jian"){
        data[index].count--;
        sum--;
        if(data[index].state)pricesum-=data[index].price
       }
      
       console.log(data,index);
       dispatch({
           type:"list",
           data:data
       })
       dispatch({
        type:"sum",
        sum:sum
    })
    dispatch({
        type:"pricesum",
        data:pricesum
       })
    }
}
export const changeState=(index,flag)=>{//单个选中
    return (dispatch,getstate)=>{
       console.log("单个选中")
       let data=getstate().ListStore.data;
       let pricesum=getstate().ListStore.pricesum;
       let s=true;

      data[index].state=flag;

       if(flag){
           pricesum+= data[index].price*data[index].count
       }else{
           pricesum-= data[index].price*data[index].count
       }

       data.map((v,i)=>{
           if(!v.state){
               s=false
           }
       })

       dispatch({
        type:"list",
        data:data
       })
       dispatch({
        type:"pricesum",
        data:pricesum
       })

       dispatch({
        type:"all",
        all:s
       })
    }
}
export const changeAll=(flag)=>{  //全选时候的价格
    return (dispatch,getstate)=>{
       console.log("cacaac")
       let data=getstate().ListStore.data;
       let pricesum=0;
       data= data.map((v,i)=>{
        v.state=flag;
        return v;
       })

       if(flag){
           data.map((v,i)=>{
               if(v.state){
                pricesum+=v.price*v.count;
               }
           })
       }else{
        pricesum=0;
       }
       dispatch({
        type:"pricesum",
        data:pricesum
       })


       dispatch({
        type:"list",
        data:data
       })
       dispatch({
        type:"all",
        all:flag
       })
    }
}

export const getDetail=(id,cb)=>{  //详情页获取数据
    return (dispatch,getstate)=>{
       console.log("详情页获取数据index",id)
       let data=getstate().ListStore.data;
       let newdata=data.filter((v,i)=>{
             return v.id==id
       });
       console.log("详情页获取数据newdata",newdata)
       setTimeout(()=>{
           cb();
        dispatch({
            type:"detail",
            data:newdata[0]
        })
       },2000)
     
    }
}