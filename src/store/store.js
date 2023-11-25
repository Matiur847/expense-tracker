import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./transactions";

const store = configureStore({reducer: {
    transactions: transactionSlice.reducer
}})

export default store;