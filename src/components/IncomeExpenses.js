import React from 'react';
import { useSelector } from 'react-redux';

const IncomeExpenses = () => {

    const allTransaction = useSelector((state) => state.transactions.transactions)

    const price = allTransaction.map((transaction) => transaction.amount)
    const incomeAmount = price.filter((price) => price > 0).reduce((account, amount) => account += amount, 0)

    const expenseAmount = price.filter((price) => price < 0).reduce((account, amount) => (account += amount), 0) * -1

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">$ +{incomeAmount}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">$ -{expenseAmount}</p>
            </div>
        </div>

    );
};

export default IncomeExpenses;