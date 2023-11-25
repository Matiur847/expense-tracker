import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transactions: []
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        getTransaction(state, action) {
            console.log(state, action)
            state.transactions.push(action.payload)
        },
        removeTransaction(state, action) {
            const id = action.payload
            console.log('action id', id)
            state.transactions = state.transactions.filter((item) => item.id !== id)
        }
    }
})

export const transactionActions = transactionSlice.actions
export default transactionSlice;