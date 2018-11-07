let obj={
    data:[],
    sum:0,
    all:false,
    pricesum:0,
    detailData:{}
}

const listStore=(state=obj,action)=>{
    switch(action.type){
        case "list":return {
            ...state,
            data:[...action.data]
        };
        case "sum":return {
            ...state,
            sum:action.sum
        };
        case "all":return {
            ...state,
            all:action.all
        }
        
        case "pricesum":return {
            ...state,
            pricesum:action.data
        }
        case "detail":return {
            ...state,
            detailData:action.data
        }
    }
    return   state;
}
export default listStore;