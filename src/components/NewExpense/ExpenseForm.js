import React, {useState} from 'react';
import '../styling/ExpenseForm.css';

const ExpenseForm =()=>{
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');

   const titleChangehandler =(event)=>{
    setEnteredTitle(event.target.value);
   };

   const amountChangeHandler =(event)=>{
    setEnteredAmount(event.target.value);
   }

   const dateChangeHandler =(event)=>{
    setEnteredDate(event.target.value);
   }

   const submitHandler =(event)=> {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
    console.log(expenseData);
   }

    return (
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                type='text' 
                value={enteredTitle} 
                onChange={titleChangehandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                type='number'
                value={enteredAmount}
                onChange={amountChangeHandler} 
                min='0.01' 
                step='0.01' />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                type='date' 
                value={enteredDate}
                onChange={dateChangeHandler} 
                min='2019-01-01' 
                step='2022-12-31' />
            </div>
            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>
        </div>
    </form>
    )
    
}

export default ExpenseForm;