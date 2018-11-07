import axios from 'axios'
export const getdata=()=>{
    return (dispatch,getstate)=>{
        axios.get('/data').then(res=>{
            console.log(res);
            dispatch(
                {
                 type:"data",
                 data:res.data.liiang
                } 
             )
        })
       
    }
}
export const gettype=()=>{
    return (dispatch,getstate)=>{
        axios.get('/type').then(res=>{
            console.log(res);
            dispatch(
                {
                 type:"allType",
                 data:res.data
                } 
             )
        })
       
    }
}