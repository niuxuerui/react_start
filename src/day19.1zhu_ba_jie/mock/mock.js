import Mock from "mockjs"
function  l(){
    let arr=[];
    for(var i=0,len=5;i<len;i++){
           let s=[];
        for(var j=0;j<obj['arr'+(i+1)].length;j++){
             s.push(obj['arr'+(i+1)][j])
        }
        arr.push({
            name:leixingArr[i],
            lingyu:s
        })
        
    }
    return arr;
}
Mock.Random.extend({
    leixing:()=>Mock.Random.pick(['品牌设计', '网站建设', '营销','传播', 'APP开发', '策划']),
    lingyu:()=>Mock.Random.pick(['微信','餐饮','装修','食品','网店','电商','工业','视频','分销','微商','广告','教育','商业','软件','微商城','金融','培训','旅游','建筑','服装','购物','游戏','酒店','娱乐','化妆','农产品','景观','直播']),    
    city:()=>Mock.Random.pick(['合肥', '福州' ,'泉州', '厦门', '广州', '东莞', '佛山', '深圳', '郑州', '武汉', '长沙', '南京', '苏州','无锡', '南昌'])    
});
let leixingArr=['品牌设计', '网站建设', '营销','传播', 'APP开发', '策划'];
let obj={
arr1:['微信','餐饮','装修','食品','网店'],
arr2:['电商','工业','视频','分销','微商'],
arr3:['广告','教育','商业','软件','微商城'],
arr4:['金融','培训','旅游','建筑','服装'],
arr5:['购物','游戏','酒店','娱乐','化妆'],
arr6:['农产品','景观','直播']};
let lingyuArr=l();

let template={
   'data|20':[
       {
           'id|+1':0,
           name:function(){
               return `${this. $leixing}`
           },
           $leixing:'@$leixing'
       }
   ],
   liiang:{
       'allData|100':[
        {
            'id|+1':0,
            leixing:'@leixing',
            lingyu:'@lingyu',
            city:'@city',
            'il':function(){
                var arr=[]
                for(var i=0,len=10;i<len;i++){
                  arr.push({
                    name:`${this.leixing} / ${this.lingyu}/ ${this.city}类型`,
                    ct:`这是${this.leixing} / ${this.lingyu}/ ${this.city}类型第${i}条的具体数据内容`
                })
                }
                return JSON.stringify(arr);
            },
            arr:function(){
                // console.log(this.il)
                let obj=JSON.parse(this.il);
                return obj
            }
        }
    ]
   }
}
let data=Mock.mock(template);
Mock.mock('/data',()=>{
    return data
})
Mock.mock('/type',()=>{
    return {
        leixingArr,
        lingyuArr,
       cityArr:['合肥', '福州' ,'泉州', '厦门', '广州', '东莞', '佛山', '深圳', '郑州', '武汉', '长沙', '南京', '苏州','无锡', '南昌']
    }
})