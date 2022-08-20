import NewExpensesItems from "./components//Expenses/NewExpensesItems";
import "./App.css";
import InputExpense from "./components/InputExpense/InputExpense";
import { useState } from "react";

const DUMMYEXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
    const [expenses , setexpenses] = useState(DUMMYEXPENSE);

  const addExpenseHandler = expense =>{
    setexpenses((prevExpenses => {
            return [expense , ...DUMMYEXPENSE];
    }));
  }
  return (
    <div>
            <InputExpense onAddExpense={addExpenseHandler}/>
    
            <NewExpensesItems expenses={expenses} />

    </div>
  );
}

export default App;
