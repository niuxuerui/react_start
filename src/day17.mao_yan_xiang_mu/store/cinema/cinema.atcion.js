import axios from "axios"
export const getdata=()=>{
  return (dispatch,getstate)=>{
      axios.get("/cinema").then(res=>{
        dispatch({
            type:"cinema",
            data:res.data.data
        })
      })

  }
}