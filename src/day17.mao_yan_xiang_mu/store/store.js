import {combineReducers,createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import IndexStore from "./IndexStore/index.reduce"
import CinemaStore from "./cinema/cinema.reducer"
import LoginStore from "./loginStore/login.reducer"

let big =combineReducers({
    IndexStore,
    CinemaStore,
    LoginStore
})
let store =createStore(
    big,
    applyMiddleware(thunk)
)
export default store;