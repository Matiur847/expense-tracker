import React, { useContext, useState } from 'react';
import Transaction from './Transaction';
import { GlobalContext, GlobalState } from '../App';

const TransactionList = () => {

    // const [context, setContext] = useContext(GlobalContext)

    const transaction = [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]

    const { transactions } = useContext(GlobalState)
    return (
        <>
            <h3>History Transaction: {transactions.length}</h3>
            <ul className="list">
                {
                    transactions.map((item) => (<Transaction transaction={item} key={item.id} />))
                }
            </ul>
        </>
    );
};

export default TransactionList;