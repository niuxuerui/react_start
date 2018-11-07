
import Mock from "mockjs"
import axios from "axios"

let template={//movie的数据
   'hot|20':[
       {
           "id|+1":1,
           'img':function(){
               return `/imgs/1 (${this.id}).gif`
           },
           title:function(){
            return `热播电影${this.id})`
          },
          des:function(){
                return `这是热播电影${this.id}的描述`
           },
           fen:function(){
            return `1${this.id}分`
         },

       }
   ],
   'future|20':[
    {
        
        "s|+1":1,
        'id':function(){
            return 21-this.s
        },
        'img':function(){
            return `/imgs/1 (${this.id}).gif`
        },
        title:function(){
         return `即将上映电影${this.id})`
       },
       des:function(){
             return `这是即将上映电影${this.id}的描述`
        },
        fen:function(){
         return `1${this.id}分`
      },

    }
]
};
let movie=Mock.mock(template);
Mock.mock('/movie',()=>{
    return movie
});
//影院
Mock.Random.extend({
    title:()=>Mock.Random.pick(["大地","电视呢服了你打发2","那地方拿到就服你3","万人口那个题那部分4"]),
    name:()=>Mock.Random.pick(["苹果电影","西瓜电影","成龙电影","周杰伦电影"]),
    price:()=>Mock.Random.pick([60,10,200,133,166,300]),
    city:()=>Mock.Random.pick(['北京',"上海",'天津']),
    pinpai:()=>Mock.Random.pick(['腾讯','爱奇艺',"优酷"]),
    tese:()=>Mock.Random.pick(['爱情',"喜剧",'亲情'])
})
let template2={
   'data|100':[
       {
           'id|+1':0,
           'city':'@city',
           'pinpai':'@pinpai',
           'tese':'@tese',
           'name':'@name',
           'l':function(){
               return `${this.id}${this.name}`
           },
           'price':'@price',
           'des':function(){
            return `这是${this.l}的描述`
        },
       }
   ]
}
let cinema=Mock.mock(template2);

Mock.mock('/cinema',()=>{
    return cinema
});

//用户信息
let users =[
    {
        tl:"13720988001",
        name:'牛雪瑞',
        zhang:'2552789835',
        mi:'123'
    },
    {
        tl:"18612838086",
        name:'林俊杰',
        zhang:'964174848',
        mi:'123'
    }
]

Mock.mock("/user",(opt)=>{//返回用户信息
   console.log(opt,'opt')
    let now=JSON.parse(opt.body).data;

    let key1=Object.keys(now)[0];
    let key2=Object.keys(now)[1];


    // let newData = users.some((v,i) => {
    //     console.log(v,i)
    //     return v[key1] === now[key1] && v[key2] === now[key2]
    // })
    // console.log(newData);
   let t1=false;//用户是否存在
    for(let i=0,len=users.length;i<len;users[i++]){
        console.log(users[i][key1],'----',now[key1],'++++',users[i][key2],'----',now[key2])
        console.log(users[i][key1]===now[key1]&&users[i][key2]!==now[key2])

        if(users[i][key1]===now[key1]&&users[i][key2]===now[key2]){
         return {
             code:'登录成功'
         }
        }
        if(users[i][key1]===now[key1]){
            t1=true;//用户存在
        }
    }
    if(t1){
        return {
            code:'密码不正确'
        }
    }else{
        return {
            code:'用户不存在'
        };
    }
  
})

//反向代理失败了
Mock.mock("/mao",()=>{
    axios.get("http://m.maoyan.com/ajax/movieOnInfoList?token=OYBR9MrYm93zBWfDK949d9nmknoAAAAAYgYAAJp-C5Niot65t2CME8D3WZwwUrRshARXiY5N0LIie91QKUIvwDQqpxsXfjoRGoO4iA").then(res=>{
        console.log(res,'resmaoyan');
        return res;
    })
    
})