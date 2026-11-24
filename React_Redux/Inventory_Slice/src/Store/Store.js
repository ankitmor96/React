import { configureStore } from "@reduxjs/toolkit";
import InventorySlice from "../Feartures/InventorySlice";

const store = configureStore ({
    reducer: {
        inventory: InventorySlice,
    },
});

export default store;