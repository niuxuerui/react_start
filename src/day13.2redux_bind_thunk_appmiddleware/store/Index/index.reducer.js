


let obj={
    data:{
        color:'blue'
    }
}
const IndexStore=(state=obj,action)=>{
    switch (action.type){
        case 'index':return {
            ...state,
            data:{color:action.data}
        }
    }
    return state
}
export default  IndexStore;