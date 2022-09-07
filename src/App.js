import ChildrenDemo from "./children/component/Children";
import Expense from "./expense/component/expenses/Expense";
import React from "react";
import NewExpenses from "./expense/component/newsExpenses/NewExpenses";
import { useEffect, useState } from "react";
const EXPENSE_ARR = [
  {
    id: 1,
    date: new Date("2022, 12, 12"),
    todo: "Car Instrurace",
    price: "294.64",
  },
  { id: 2, date: new Date("2021, 12, 20"), todo: "Home", price: "100" },
  { id: 3, date: new Date("2020, 10, 25"), todo: "Eat", price: "500" },
  { id: 4, date: new Date("2020, 12, 2"), todo: "Game Play", price: "1300" },
];
function App() {
  const [expenseArr, setExpenseArr] = useState(EXPENSE_ARR);

  //JSX by REACT
  // return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h2", {}, "letgo"),
  //     React.createElement(Expense, { expenseArr: expenseArr })
  //   );
  const addExpense = (expense) => {
    setExpenseArr((preExpense) => {
      return [expense, ...preExpense];
    });
    
  };
  return (
    <div>
      {/* <ChildrenDemo heading='Heading'>
        Children
      </ChildrenDemo> */}
      <NewExpenses addExpense={addExpense} />
      <Expense expenseArr={expenseArr} />
    </div>
  );
}

export default App;
