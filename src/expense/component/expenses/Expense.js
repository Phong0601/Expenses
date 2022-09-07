import ExpenseItem from "./ExpenseItem";
import './Expense.css'
function Expense  (props){
   
    return(
        <div className="expense">
            <ExpenseItem expenseArr={props.expenseArr}/>
        </div>
    )
}
export default Expense