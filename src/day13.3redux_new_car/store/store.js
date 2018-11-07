import   {combineReducers,createStore,applyMiddleware} from "redux";
import ListStore from "../store/list.reducer"
import thunk from "redux-thunk"

let big = combineReducers({
    ListStore
})
let store=createStore(big,
    applyMiddleware(thunk)
)
export default store;