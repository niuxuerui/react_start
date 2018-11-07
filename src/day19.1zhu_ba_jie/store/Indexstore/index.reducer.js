
let obj ={
    data:1,
    alltype:[]
}
const indexstore=(state=obj,action)=>{
    switch(action.type){
        case 'data':return {
            ...state,
            data:action.data
        }
        case 'allType':return {
            ...state,
            alltype:action.data
        }
    }
    return state
}
export default indexstore;