import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseDate from "./ExpenseDate";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const [filter, setFilter] = useState("All");

  const selectFilter = (value) => {
    setFilter(value);
  };

  const filterYear = props.expenseArr.filter((expense) => {
    if (filter == "All") {
      return props.expenseArr;
    } else {
      return expense.date.getFullYear().toString() === filter;
    }
  });
  const render = filterYear.map((item) => {
    const { date, todo, price, id } = item;
    return (
      <Card key={id} className="expense-item ">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{todo}</h2>
          <div className="expense-item__price">${price}</div>
        </div>
      </Card>
    );
  });
  return (
    <div>
      <ExpensesFilter selectValue={selectFilter} />
      <ExpenseChart expense={filterYear}/>
      {filterYear.length === 0 ? (
        <p style={{ color: "white", textAlign: "center" }}>No Expense Found</p>
      ) : (
        render
      )}
    </div>
  );
}

export default ExpenseItem;
