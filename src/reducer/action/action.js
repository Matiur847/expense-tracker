export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'

export const addTransaction = (text ,id) => {
    return { type: ADD_TRANSACTION }
}

export const removeTransaction = (id) => {
    return { type: REMOVE_TRANSACTION }
}