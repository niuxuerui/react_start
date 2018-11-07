import  IndexStore from "./index/index.reduce";
import {combineReducers,createStore} from "redux";



let bigData=combineReducers({
    IndexStore
});

let store=createStore(bigData);

export default store;
//2.合并数据块,创建全局数据库，暴露到全局