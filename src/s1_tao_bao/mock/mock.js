import Mock from "mockjs";
let template={
    code:"0",
    data:{
        'list|10':[{
            "id|+1":0,
            des:function(){
                return `这是${this.id}条描述`
            },
            name:function(){
                return `这是${this.id}的名字`
            },
        }]
    }
}

let data= Mock.mock(template);

Mock.mock('/data',()=>{
    return data
})