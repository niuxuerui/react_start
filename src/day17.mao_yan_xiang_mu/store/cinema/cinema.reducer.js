

let obj={
    cinemaData:1
}
const CinemaStore=(state=obj,action)=>{
    switch(action.type){
        case 'cinema':return{
            ...state,
            cinemaData:action.data
        }
    }
    return state
}
export default  CinemaStore;