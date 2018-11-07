import axios from "axios"
export const getdata=(opt)=>{
    return (dispatch,getstate)=>{
        axios.get('/user',
    {
        data:opt
    }
    ).then(res=>{
            console.log(res.data);
            if(res.data.code===0){
                dispatch({
                    type:'islogin',
                    data:true
                })
            }else{
                dispatch({
                    type:'islogin',
                    data:false
                })
            }
            dispatch({
                type:'data',
                data:res.data
            })
        })
       
    }
}