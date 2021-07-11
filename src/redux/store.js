import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import firstReducer from "./first/firstSlice";

const middlewares = [logger];

const store = configureStore({
    reducer:{
        first : firstReducer
    },
    middleware : middlewares
});

export default store;