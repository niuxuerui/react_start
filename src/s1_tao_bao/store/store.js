import IndexStore from "./indexstore/index.reducer"
import {combineReducers,createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";

let big =combineReducers({
    IndexStore
});
let  store =createStore(
    big,
    applyMiddleware(thunk)
);
export default store;