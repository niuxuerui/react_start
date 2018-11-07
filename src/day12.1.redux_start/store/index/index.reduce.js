let obj={
    data:[{
        name:"box1",
        width:'100px',
        height:'100px',
        color:'red'
    },
    {
        name:"box2",
        width:'200px',
        height:'200px',
        color:'orange'
    },
    {
        name:"box3",
        width:'300px',
        height:'300px',
        color:'#f60'
    }]
}
const IndexStore=(state=obj,action)=>{
    switch(action.type){
        case 'color':return {
            ...state,
            data:[...action.data]
        }
    }
    return state
}
export default IndexStore;//1.单个的数据库

//5.根据派送的数据，做一些处理