import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2020");

    const yearChangedHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredItems = props.items.filter(x => x.date.getFullYear().toString() == selectedYear);
    

    return (
        <Card className="expenses">
            <ExpensesFilter
                year={selectedYear}
                onYearChange={yearChangedHandler}
            />
            {filteredItems.map(item => (
                <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
