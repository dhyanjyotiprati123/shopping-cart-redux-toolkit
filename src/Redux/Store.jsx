import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './FilterSlice';
import cartReducer from "./CartSlice";

const store = configureStore({
    reducer: {
       cart: cartReducer,
       filter: filterReducer
    }
});

export default store