import { createContext, useReducer, useState} from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';

import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { reducer } from './contex/AppReducers';

export const GlobalContext = createContext();



// Initial state
export const initialState = {
  transactions: []
  
}

export const GlobalState = createContext(initialState);


function App() {



  const [context, setContext] = useState([])

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION', 
      payload: transaction
    })
  }

  const removeTransaction = (id) => {
    dispatch({
      type: 'REMOVE_TRANSACTION',
      payload: id
    })
  }

  return (
    <GlobalState.Provider value={{ transactions: state.transactions, addTransaction, removeTransaction}}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalState.Provider>
  );
}

export default App;
