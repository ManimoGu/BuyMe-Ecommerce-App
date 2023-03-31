import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import CardReducer from "./Reducers/Cards"
import thunk from "redux-thunk";

const reducers = combineReducers({
    Cards : CardReducer
})

const config = {
    key : "root",
     storage
    
}

const reducerss = persistReducer(config, reducers)

const Store = configureStore({
    reducer : reducerss,
    devTools : process.env.NODE_ENV !== "production",
    middleware : [thunk]
})


export default Store