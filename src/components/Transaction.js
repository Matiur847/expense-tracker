import React from 'react';
import { useDispatch } from 'react-redux';
import { transactionActions } from '../store/transactions';

const Transaction = (props) => {
    const { transaction } = props

    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(transactionActions.removeTransaction(id))
    }

    const IsSign = transaction.amount < 0 ? '-' : '+'
    return (
        <li className={transaction.amount < 0 ? 'plus' : 'minus'}>
            {transaction.text} <span>{IsSign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => removeItem(transaction.id)}>x</button>
        </li>
    );
};


export default Transaction;