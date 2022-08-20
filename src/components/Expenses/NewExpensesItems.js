import React, { useState } from "react";

import "./NewExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../InputExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpensesItems(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const filterchangeHandler = (SelectedYear) => {
    setFilterYear(SelectedYear);

  };
  
  
  const filteredExpense = props.expenses.filter(expense =>{
          return expense.date.getFullYear().toString() === filterYear ;
         
  } );

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSaveFilter={filterchangeHandler}
        />
         <ExpensesChart expenses={filteredExpense} />
       <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default NewExpensesItems;
