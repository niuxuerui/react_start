import listStore from "./List/list.reduce";

import {combineReducers,createStore} from "redux";


let bigData=combineReducers({
    listStore
});
let store=createStore(bigData);
export default store;