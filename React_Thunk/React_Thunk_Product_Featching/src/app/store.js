import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/Products/ProductSlice"


const store = configureStore({
    reducer: {
        products : ProductSlice,
    }
});

export default store;