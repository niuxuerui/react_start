import axios  from "axios"
export const getdata=()=>{
    return (dispatch,getstate)=>{
        axios.get('/data').then(res=>{
            dispatch({
                type:"data",
                data:res.data.data
            })
        })
        
    }
}