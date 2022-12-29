import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./features/LoginSlice";
import ProductSlice from "./features/ProductSlice";

export const Store = configureStore({
    reducer:{
        product:ProductSlice,
        login:LoginSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;