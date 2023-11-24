import { createStore } from "redux";
import { expenseReducer } from "../reducers/reducers";

export const store = createStore(expenseReducer)