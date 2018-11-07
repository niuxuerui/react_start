export const sendData=(color)=>{
     return (dispatch,getstate)=>{
         dispatch({
             type:"index",
             data:color
         })
     }
}