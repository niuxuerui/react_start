let obj={
    data:1,
    login:false
}
const indexStore=(state=obj,action)=>{
    switch(action.type){
        case 'data':return {
            ...state,
            data:action.data
        };
        case 'islogin':return {
            ...state,
            login:action.data
        }
    }
    return state
}

export default indexStore;