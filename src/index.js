import React from 'react';
import ReactDOM from 'react-dom';
//day11   初识redux
//1.高阶函数 原理 类似 connect
// import App from './day11.1_gaojie_yuanli/index1.2';
//2.第一次使用redux
// import  {Provider} from "react-redux"
// import store from "./day11.2_redux_start/store/store"
// import App from './day11.2_redux_start/index';

//day12    加深印象  redux
//1.再用一次redux
// import  {Provider} from "react-redux"
// import store from "./day12.1.redux_start/store/store"
// import App from "./day12.1.redux_start/app"
//2.购物车
// import App from "./day12.2redux_shopcar/route/route"
// import {Provider} from "react-redux";
// import store from "./day12.2redux_shopcar/store/store";
// import "./day12.2redux_shopcar/css/index.css"
// import "./day12.2redux_shopcar/mock/mock"
//day13
//1.connect的各项参数
//2.bindAction    thunk   applyMiddle
// import App from "./day13.2redux_bind_thunk_appmiddleware/route/route"
// import  {Provider} from "react-redux";
// import store from "./day13.2redux_bind_thunk_appmiddleware/store/store"
//3.新写法购物车

// import App from "./day13.3redux_new_car/route/route";
// import {Provider} from "react-redux"
// import store from "./day13.3redux_new_car/store/store"

//day16   没做完
//1.学习antd的Form表单
// import App from "./day16.Form_API/route/route"

//day17 猫眼项目
//1.
import App from "./day17.mao_yan_xiang_mu/route/route"
import "./day17.mao_yan_xiang_mu/css/index.css"
import "./day17.mao_yan_xiang_mu/css/font_839746_ho3dixlif49/iconfont.css"
import {Provider} from "react-redux"
import store from "./day17.mao_yan_xiang_mu/store/store"
import "./day17.mao_yan_xiang_mu/mock/mock"

//day 19 
//1.猪八戒网站 导航栏
// import App from "./day19.zhu_ba_jie/route/route"
// import store from "./day19.zhu_ba_jie/store/store"
// import {Provider} from "react-redux"
// import './day19.zhu_ba_jie/mock/mock'
// import './day19.zhu_ba_jie/css/index.css'
//2.foem 表单 
// import App from "./day19.2_Form_user/route/route"
// import "./day19.2_Form_user/css/index.css"
// import {Provider} from "react-redux"
// import store from "./day19.2_Form_user/store/store"
// import './day19.2_Form_user/mock/mock'

//实训 复习一下 想做下淘宝
// import "./s1_tao_bao/css/index.css"
// import "./flexible"
// import App from "./s1_tao_bao/route/route"
// import './s1_tao_bao/mock/mock'
// import {Provider} from "react-redux"
// import store from "./s1_tao_bao/store/store"
// import registerServiceWorker from './registerServiceWorker';

//折叠组件
// import App from "./s2_zhedie/zhedie"
// import "./s2_zhedie/css/index.css"


ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

