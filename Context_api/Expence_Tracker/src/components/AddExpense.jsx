import { useContext, useEffect, useState } from "react";
import { expenseContext } from "../Context/ExpenseContext";



const AddExpense = () => {

    const [input, setInput] = useState({
        Title: "",
        Description: "",
        Amount: "",
        Date: "",
        Category: "",
        Type: ""
    });

    console.log("input", input);

    const { handleAdd, editValue, handleUpdate } = useContext(expenseContext);

    useEffect(() => {
        editValue ? setInput(editValue) : null
    }, [editValue]);

    const handleChange = (field, e) => {
        setInput((p) => {
            return {
                ...p,
                [field]: e.target.value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !input.Title.trim() ||
            !input.Description.trim() ||
            !input.Amount ||
            !input.Date ||
            !input.Category ||
            !input.Type
        ) {
            alert("Please fill all fields");
            return;
        }

        if (editValue) {
            handleUpdate(input);
        } else {
            handleAdd(input);
        }

        setInput({
            Title: "",
            Description: "",
            Amount: "",
            Date: "",
            Category: "",
            Type: ""
        });

    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <label htmlFor="Title">Title : </label>
                <input
                    type="text"
                    placeholder="enter your title"
                    value={input.Title}
                    onChange={(e) => handleChange("Title", e)}
                />
                <br />
                <br />
                <label htmlFor="Description">Description : </label>
                <input
                    type="text"
                    placeholder="enter your Description"
                    value={input.Description}
                    onChange={(e) => handleChange("Description", e)}
                />
                <br />
                <br />
                <label htmlFor="Amount">Amount : </label>
                <input
                    type="number"
                    placeholder="enter your Amount"
                    value={input.Amount}
                    onChange={(e) => handleChange("Amount", e)}
                />
                <br />
                <br />
                <label htmlFor="Date">Date : </label>
                <input
                    type="date"
                    placeholder="enter your Date"
                    value={input.Date}
                    onChange={(e) => handleChange("Date", e)}
                />
                <br />
                <br />
                <label htmlFor="Category">Category : </label>
                <select
                    value={input.Category}
                    onChange={(e) => handleChange("Category", e)}
                >
                    <option value="">Select Category</option>
                    <option value="Money Transfer">Money Transfer</option>
                    <option value="Cash Withdrawal">Cash Withdrawal</option>
                    <option value="General Expense">General Expense</option>
                    <option value="Food&Dining">Food & Dining</option>
                    <option value="HealthCare">Health Care</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Travel">Travel</option>
                </select>
                <br />
                <br />
                <label htmlFor="Type">Type : </label>
                <select
                    value={input.Type}
                    onChange={(e) => handleChange("Type", e)}
                >
                    <option value="">Select Type</option>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                </select>
                <br />
                <br />

                <button type="submit">
                    {editValue ? "edit" : "add"}
                </button>
            </form>

        </>
    )
};

export default AddExpense;