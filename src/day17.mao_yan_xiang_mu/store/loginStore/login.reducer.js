

let obj={
    login:false,
    str:'请登录'
}
const loginStore=(state=obj,action)=>{
    switch(action.type){
        case "login":
        console.log(999999)
        return {
            ...state,
            login:action.data
        };
        case 'str':return {
            ...state,
            str:action.data
        }
    }
    return state
}
export default  loginStore;