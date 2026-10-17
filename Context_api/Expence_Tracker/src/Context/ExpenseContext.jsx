import { createContext, useState } from "react";

export const expenseContext = createContext({
    expenseList: [],
    handleAdd: () => { },
    editValue: null,
    handleEdit: () => {},
    handleUpdate: () => {},
    handleDelete: () => {}
});

const ExpenseContext = ({ children }) => {

    const initialValue = [
        {
            id: 1,
            Title: "movie",
            Description: "spider man 2",
            Amount: 500,
            Date: "2026-10-15",
            Category: "general expense",
            Type: "Debit",
        },
        {
            id: 2,
            Title: "cricket bet",
            Description: "Cricket",
            Amount: 1000,
            Date: "2026-10-20",
            Category: "general expense",
            Type: "Debit",
        },
    ];

    const [expenseList, setExpenseList] = useState(initialValue);

   const [editValue,setEditValue] = useState(null);

    const handleAdd = (input) => {

        const newExpense = {
            id: new Date().getTime(),
            ...input
        };

        setExpenseList((p) => [...p, newExpense]);

        console.log("Updated Expense List:", expenseList);
    }

    const handleEdit = (id) => {
        const editExpense = expenseList.find((p)=> p.id === id);
        setEditValue(editExpense);
    }

    const handleUpdate = (input) => {
        setExpenseList((p)=> {
           return  p.map((E)=> E.id === input.id ? input : E)
        });
        setEditValue(null);
    };

    const handleDelete = (id) => {
        setExpenseList((p)=> {
            return p.filter((E)=> E.id !== id);
        })
    }

    const debit = expenseList
    .filter((E)=> E.Type === "Debit")
    .reduce((total,E)=> total + Number(E.Amount),0);

    const credit = expenseList
    .filter((E)=> E.Type === "Credit")
    .reduce((total,E)=> total + Number(E.Amount),0);

    const balance = credit - debit ;

    
    const value = { expenseList, handleAdd , editValue , handleEdit , handleUpdate , handleDelete ,debit , credit , balance}

    return (
        <>
            <expenseContext.Provider value={value}>{children}</expenseContext.Provider>
        </>
    )
};

export default ExpenseContext;