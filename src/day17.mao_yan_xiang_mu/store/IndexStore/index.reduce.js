let obj={
    data:0,
    maoyan:[],
    movie:[],
    header:'猫眼电影',
    isLoding:true
}

const indexStore=(state=obj,action)=>{
    switch(action.type){
        case "data":return {
            ...state,
            data:action.data
        };
        case "maoyan":return {
            ...state,
            maoyan:action.data
        };
        case "header":return {
            ...state,
            header:action.data
        };
        case "loding":return {
            ...state,
            isLoding:action.data
        }
    }
    return state
}

export default indexStore;