import { ADD_TRANSACTION, REMOVE_TRANSACTION } from "../action/action";

const initialState = {
    expenseStore: [],
    transaction: [

    ]
}

export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            console.log(state, action)
            return state;
        case REMOVE_TRANSACTION:
            console.log(state, action)
            const remainTransacion = state.transaction.filter((item) => item.id !== action.id)
            return state;
        default:
            return state;
    }
}