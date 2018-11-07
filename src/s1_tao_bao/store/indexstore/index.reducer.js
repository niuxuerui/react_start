let obj={
    data:111
}
const indexstore =(state=obj,action)=>{
    switch(action.type){
        case "data":return {
            ...state,
            data:action.data
        }
    }
    return state
}
export default indexstore;