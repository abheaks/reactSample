import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const exp = props.data.map((expense) => {
    return (
      <div key={expense}>
        <ExpenseItem
          date={expense.expenseDate}
          title={expense.expenseTitle}
          amount={expense.expenseAmount}
        />
      </div>
    );
  });
  return <div className="expenses">{exp}</div>;
}

export default Expenses;
