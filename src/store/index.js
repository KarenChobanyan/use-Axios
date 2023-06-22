import { applyMiddleware, createStore } from "redux"
import { combinedReducers } from "./reducers"
import createSaga from "redux-saga"
import rootSaga from "./saga"



const sagaMiddle = createSaga()
const store = createStore(combinedReducers,applyMiddleware(sagaMiddle))
sagaMiddle.run(rootSaga)
export default store