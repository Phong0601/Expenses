import React, { useRef, useState } from "react";
import NewExpensesForm from "./NewExpensesForm";
import "./NewExpenses.css";
function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  const changeForm = () => {
    setIsEditing(true);
  };
  const changeCancle = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense ">
      {!isEditing && <button onClick={changeForm}> New Expense</button>}

      {isEditing && (
        <NewExpensesForm
          changeCancle={changeCancle}
          addExpense={props.addExpense}
        />
      )}
    </div>
  );
}

export default NewExpenses;
