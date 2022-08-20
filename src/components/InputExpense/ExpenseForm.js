import React  , { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
        const [enteredTitle , setEnteredTitle] = useState('');
        const titleChangeHandler = (event) => {
               setEnteredTitle(event.target.value);
        }

        const [enteredAmount , setEnteredAmount] = useState('');
        const amountChangeHandler = (event) => {
               setEnteredAmount(event.target.value);
        }

        const [enteredDate , setEnteredDate] = useState('');
        const dateChangeHandler = (event) => {
               setEnteredDate(event.target.value);
        }

            const submitHandler = (event) => {
                event.preventDefault();

                const expenseData = {
                    title : enteredTitle ,
                    amount : +enteredAmount,
                    date : new Date(enteredDate)
                };
                setEnteredTitle('');
                setEnteredAmount('');
                setEnteredDate('');
                props.onSaveExpenseData(expenseData);
               
            }
           
          
             

  return (
    <form onSubmit={submitHandler}>

<div className='new-expense__controls'>

<div className='new-expense__control'>
    <label>Title :</label>
            <input type='text' value={enteredTitle}  onChange={titleChangeHandler}/>
</div>
<div className='new-expense__control'>
    <label>amount :</label>
            <input type='number' min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandler} />
</div>
<div className='new-expense__control'>
    <label>Date :</label>
            <input type='Date' min="2021-01-01" max="2022-12-31" value={enteredDate}  onChange={dateChangeHandler}/>
</div>
<div className='new-expense__actions'>
      <button type='button' onClick={props.onCancel}>Cancel</button> 
      <button type='submit'>Add Expense</button> 
    </div>
</div> 
               
    </form>
  )
}

export default ExpenseForm