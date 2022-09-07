import React, { useState } from "react";
import "./NewExpensesForm.css";
const NewExpensesForm = (props) => {

  const [expense, setExpense] = useState({
    id: "",
    todo: "",
    price: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const addExpenses = (e) => {
    e.preventDefault();
    if(expense.todo =='' || expense.price =='' ) return alert('Fill Title/Price')
    if(expense.date == '') return alert('Fill date')
    console.log(expense.date);
    const newDate = new Date(expense.date);
    const addInput = { ...expense, id: Math.random(), date: newDate };
    props.addExpense(addInput);
    clearForm();
  };
  const clearForm = () => {
    setExpense({
      id: "",
      todo: "",
      price: "",
      date: "",
    });
  };
  return (
    <form onSubmit={addExpenses}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={expense.todo}
            name="todo"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            onChange={handleChange}
            name="price"
            type="number"
            min="0.01"
            step="0.01"
            value={expense.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={handleChange}
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-31-12"
            value={expense.date}
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="button" onClick={props.changeCancle}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpensesForm;
