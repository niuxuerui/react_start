import IndexStore from "./index/index.reduce";
import {combineReducers,createStore}  from "redux";

let bigStore=combineReducers({
    IndexStore
});
let store=createStore(bigStore);
export default store;