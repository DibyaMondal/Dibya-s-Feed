import { createStore,applyMiddleware } from "redux"
import  thunk  from "redux-thunk"
import reducer from "./reducer.js"
import { fetchUsers } from "./actions.js"

export const store = createStore(reducer,applyMiddleware(thunk))

store.subscribe(console.log(store.getState()))
dispatch(fetchUsers())   