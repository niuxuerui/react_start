import {combineReducers,createStore,applyMiddleware} from 'redux'
import IndexStore from "../store/Index/index.reducer"
import thunk from "redux-thunk"

let bigdata=combineReducers({
    IndexStore
});

let store = createStore(
    bigdata,
    applyMiddleware(thunk)
);
export default store; 