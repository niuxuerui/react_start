import Mock from "mockjs";
let data={
    data:[
        {
            name:"苹果",
            price:20,
            state:false,
            count:0,
            id:0
        },
        {
            name:"香蕉",
            price:10,
            state:false,
            count:0,
            id:1
        },
        {
            name:"橘子",
            price:5,
            state:false,
            count:0,
            id:2
        },
        {
            name:"西瓜",
            price:2.5,
            state:false,
            count:0,
            id:3
        }
    ]
}
Mock.mock('/data',()=>{
    return {
       data
    }
})