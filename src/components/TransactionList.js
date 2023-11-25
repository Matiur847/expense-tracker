import React from 'react';
import Transaction from './Transaction';
import { useSelector } from 'react-redux';

const TransactionList = () => {

    const allTransaction = useSelector((state) => state.transactions.transactions)
    // console.log(allTransaction)

    // const transaction = [
    //     { id: 1, text: 'Flower', amount: -20 },
    //     { id: 2, text: 'Salary', amount: 300 },
    //     { id: 3, text: 'Book', amount: -10 },
    //     { id: 4, text: 'Camera', amount: 150 }
    // ]

    return (
        <>
            <h3>History Transaction: {allTransaction.length}</h3>
            <ul className="list">
                {
                    allTransaction.map((transaction) => <Transaction transaction={transaction} key={transaction.id} />)
                }
            </ul>
        </>
    );
};

export default TransactionList;