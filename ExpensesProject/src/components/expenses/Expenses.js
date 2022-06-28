import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2022");

    const yearChangedHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredItems = props.items.filter(x => x.date.getFullYear().toString() === selectedYear);

    let expensesContent = <p>No expenses found.</p>;

    if (filteredItems.length > 0) {
      expensesContent = filteredItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
    }
  
    return (
      <div>
        <Card className='expenses'>
          <ExpensesFilter
            selected={selectedYear}
            onChangeFilter={yearChangedHandler}
          />
          {expensesContent}
        </Card>
      </div>
    );
};

export default Expenses;
