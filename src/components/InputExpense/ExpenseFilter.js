import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
   

    const selectHandler = (event) =>{
        props.onSaveFilter(event.target.value);
        
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        
        <select  value={props.selected} onChange={selectHandler}>
          <option value='2022'>2023</option>
          <option value='2021'>2022</option>
          <option value='2020'>2021</option>
          <option value='2019'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
