import Mock from "mockjs"
let data={
    username:"niu",
    pwd:'123'
}
Mock.mock('/user',(opt)=>{
    console.log('mock opt',opt)
    let obj=JSON.parse(opt.body);
    console.log(obj['username'],'------',data['username'],'+++++',obj['pwd'],'-----',data['pwd'])
    if(obj['username']===data['username']&&obj['pwd']===data['pwd']){
        return {
            code:0
        }
    }else{
        return {
            code:2
        }
    }
    
})