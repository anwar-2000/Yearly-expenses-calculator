import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseForm from './ExpenseForm';
import './InputExpense.css';


const InputExpense = (props) => {

                                      const [isEditing , setIsEditing] = useState(false);
                    const startEditingHandler = () => {
                        setIsEditing(true);
                    };
                    const stopEditingHandler = () => {
                        setIsEditing(false);
                    };




    const saveExpenseDataHandler =(enteredExpenseData)=> {
        const finalExpenseData = {
            ...enteredExpenseData ,
            id : Math.random().toString()
        };
        props.onAddExpense(finalExpenseData);
        setIsEditing(false);
    };

        return <div className='new-expense'>
           { !isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
           { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}  />}
        </div>
};

export default InputExpense ;