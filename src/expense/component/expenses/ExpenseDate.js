import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = new Intl.DateTimeFormat("en-Us", { month: "long" }).format(
    props.date
  );
  const day = new Intl.DateTimeFormat("en-Us", { weekday: "long" }).format(
    props.date
  );

  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__month">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}

export default ExpenseDate;
