import React, { useContext, useState } from 'react';
import { GlobalContext, GlobalState } from '../App';

const AddTransaction = (props) => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    // const [context, setContext] = useContext(GlobalContext)

    // const [allTransaction, setAllTransaction] = useState([])

    // const AddTransaction = (transaction) => {
    //     const oldTransaction = [...context, transaction]
    //     setContext(oldTransaction)
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const newTransaction = {
    //         id:  Math.floor(Math.random() * 1000000000),
    //         text,
    //         amount
    //     }
    //     AddTransaction(newTransaction)
    // }

    const { addTransaction } = useContext(GlobalState)

    const handleSubmit = (e) => {
        e.preventDefault();
        setText("")
        setAmount("")

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text, 
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
       <div>
            <>
                <h3>Add new transaction</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount"
                        >Amount <br />
                            (negative - expense, positive + income)</label>
                        <input onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </>
       </div>
    );
};

export default AddTransaction;