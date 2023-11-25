import React from 'react';
import { useSelector } from 'react-redux';
const Balance = () => {

    const allTransaction = useSelector((state) => state.transactions.transactions)
    
    const totalPrice = allTransaction.reduce((inTotal, product) => inTotal + product.amount, 0)
    
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${totalPrice}</h1>
        </>
    );
};


export default Balance;