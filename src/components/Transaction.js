import React, { useContext } from 'react';
import { GlobalState } from '../App';

const Transaction = (props) => {
    const { transaction } = props

    const {removeTransaction} = useContext(GlobalState)

    const IsSign = transaction.amount < 0 ? '-' : '+'
    return (
        <li className={transaction.amount < 0 ? 'plus' : 'minus'}>
            {transaction.text} <span>{IsSign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => removeTransaction(transaction.id)}>x</button>
        </li>
    );
};


export default Transaction;