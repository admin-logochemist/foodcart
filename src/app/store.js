import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice"
import ResReducer from "../features/ResSlice"
export default configureStore({
    reducer:{
        resturant:ResReducer,
        user:userReducer,
    },
});