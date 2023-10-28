import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Components/Products/ProductSlice";
import searchSlice from "../Components/Products/searchSlice";


export const store = configureStore({
    reducer:{
        list:ProductSlice,
        search:searchSlice
    }
})