import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { transactionActions } from '../store/transactions';

const AddTransaction = (props) => {

    const dispatch = useDispatch();
    const inputText = useRef();
    const inputAmount = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(transactionActions.getTransaction({
            id: Math.floor(Math.random() * 10000000000),
            text: inputText.current.value, 
            amount: +inputAmount.current.value
        }))

        inputText.current.value = ""
        inputAmount.current.value = ""
    }
    
    return (
       <div>
            <>
                <h3>Add new transaction</h3>
                <form>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input ref={inputText} type="text" placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount"
                        >Amount <br />
                            (negative - expense, positive + income)</label>
                        <input ref={inputAmount} type="number" placeholder="Enter amount..." />
                    </div>
                    <button className="btn" onClick={handleSubmit}>Add transaction</button>
                </form>
            </>
       </div>
    );
};

export default AddTransaction;