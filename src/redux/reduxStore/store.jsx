import * as redux from "redux";
import { combineReducers } from "redux";
import toggleReducer from "../reduxReducers/toggleColorReducer";

const state= combineReducers({
    toggle:toggleReducer
})


const store = redux.createStore(state);
export default store;