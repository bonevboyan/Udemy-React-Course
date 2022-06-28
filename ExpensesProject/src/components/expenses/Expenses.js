import { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2022");

    const yearChangedHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredItems = props.items.filter(
        (x) => x.date.getFullYear().toString() === selectedYear
    );

    let expensesContent = <p>No expenses found.</p>;

    if (filteredItems.length > 0) {
        expensesContent = <ExpensesList items={filteredItems} />;
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={selectedYear}
                    onYearChange={yearChangedHandler}
                />
                <ExpensesChart expenses={filteredItems} />
                {expensesContent}
            </Card>
        </div>
    );
};

export default Expenses;
