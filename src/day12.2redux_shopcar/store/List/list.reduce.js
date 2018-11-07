let data={
    data:[],
    sum:0,
    showdata:[],
    allsum:0
};
let listStore=(state=data,action)=>{
    
    switch(action.type){
        case "list":return {
            ...state,
            data:action.data
        };
        case "add":return {
            ...state,
            sum:action.sum
        };
        case "addshow":return {
            ...state,
            showdata:action.showdata
        };
        case "caradd":return {
            ...state,
            showdata:action.showdata
        };
        case "all":return {
            ...state,
            allsum:action.allsum
        };
    }
        return  state;
}
export default  listStore;