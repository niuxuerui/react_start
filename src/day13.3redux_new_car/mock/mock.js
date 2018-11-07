import Mock from "mockjs"
let listData=[
    {
        name:"香蕉",
        state:false,
        price:15,
        count:0,
        id:0
    },
    {
        name:"苹果",
        state:false,
        price:5,
        count:0,
        id:1
    },
    {
        name:"葡萄",
        state:false,
        price:3,
        count:0,
        id:2
    },{
        name:"芒果",
        state:false,
        price:20,
        count:0,
        id:4
    }
]
Mock.mock("/list",()=>{
    return listData
})