import { configureStore } from "@reduxjs/toolkit";
import Storage from "redux-persist/es/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = {}

const config = {
    key : "root",
    Storage
    
}

const reducer = persistReducer(config, reducers)

const Store = configureStore({
    reducer : reducer,
    devTools : process.env.NODE_ENV !== "production",
    middleware : [thunk]
})


export default Store