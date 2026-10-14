
import { useContext, useState } from "react";
import { ExpenseContext } from "../components/ExpenseContext";

function AddExpense() {
    const { setExpense } = useContext(ExpenseContext);

    const [input, setInput] = useState({
        title: "",
        description: "",
        amount: ""
    });

    const handleChange = (field, e) => {
        setInput((p) => ({
            ...p,
            [field]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: Date.now(),
            ...input,
            amount: Number(input.amount)
        };

        setExpense((prev) => [...prev, newExpense]);

        setInput({
            title: "",
            description: "",
            amount: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Expense title"
                value={input.title}
                onChange={(e) => handleChange("title", e)}
                required
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Expense description"
                value={input.description}
                onChange={(e) => handleChange("description", e)}
                required
            />

            <br /><br />

            <input
                type="number"
                placeholder="Enter Expense amount"
                value={input.amount}
                onChange={(e) => handleChange("amount", e)}
                min="0.01"
                step="0.01"
                required
            />

            <br /><br />

            <button type="submit">Add Expense</button>
        </form>
    );
}

export default AddExpense;
