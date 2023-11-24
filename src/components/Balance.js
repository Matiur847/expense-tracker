import React, { useContext, useState } from 'react';
import { GlobalContext, GlobalState } from '../App';

const Balance = () => {
    
    // const [context, setContext] = useContext(GlobalContext);

    const {transactions} = useContext(GlobalState)

    const total = transactions.reduce((total, product) => total + product.amount, 0).toFixed(2)

    // let total = (0).toFixed(2);
    // for (let i = 0; i < transactions.length; i++) {
    //     const transaction = transactions[i];
    //     total = total + transaction.amount
    // }

    
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    );
};


export default Balance;