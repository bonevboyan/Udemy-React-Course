import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isFormOpen, setFormOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    const openAddHandler = () => {
        setFormOpen(true);
    };

    const stopAddHandler = () => {
        setFormOpen(false);
    };

    let formContent = <button onClick={openAddHandler}>Add New Expense</button>;

    if(isFormOpen) {
        formContent = <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddHandler}
        />
    }

    return (
        <div className="new-expense">
            {formContent}
        </div>
    );
};

export default NewExpense;
