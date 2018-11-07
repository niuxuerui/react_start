import axios from "axios"
export const isLogin=()=>{
    return (dispatch,getstate)=>{
        dispatch({
            type:"login",
            data:true
        })
    }
}
//向mock发送当前页的数据，与用所有用户信息比对
export const bidui=(pt,t,l)=>{
    
    return (dispatch,getstate)=>{
        let data={};
        data[t]=pt[t];
        data[l]=pt[l];
       axios.post("/user",{
           data
       }).then(res=>{
           console.log(res.data);
           let code=res.data.code;
       
           if(code==='登录成功'){
         
            dispatch({
                type:"login",
                data:true
            })
            dispatch({
                type:"str",
                data:'登录成功'
            })
           }else if(code==='密码不正确'){
            dispatch({
                type:"str",
                data:'密码不正确'
            })
           }else if(code==='用户不存在'){
            dispatch({
                type:"str",
                data:'用户不存在'
            })
           }
       })
    }
}