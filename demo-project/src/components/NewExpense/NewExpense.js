import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const setEditingHandler = () => {
    setIsEditing(true);
  };

  const disableEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      <button onClick={setEditingHandler}>Add New Expense</button>
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelEditing={disableEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
