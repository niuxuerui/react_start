let obj={
    data:[1,2,3],
    name:'我是indexstore中的数据',
    age:888
}

const IndexStore=(state=obj,action)=>{
    switch (action.type) {
        case "data1":return {
             ...state,
             data:action.data
        };
            
    }
    return state;
}
export default IndexStore;