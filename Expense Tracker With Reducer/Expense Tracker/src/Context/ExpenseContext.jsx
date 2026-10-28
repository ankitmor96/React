import React, { createContext, useReducer } from 'react'

export const ExpenceContext = createContext({
    ExpenseList: [],
    handleAdd: () => { },
    handleDelete: () => { },
    editVal: null,
    handleEdit: () => { },
    credit: 0,
    debit: 0,
    balance: 0
})

const intialArg = {
    ExpenseList: [
        {
            id: 1,
            title: "movie",
            description: "dhurandhar",
            category: "Entertainment",
            amount: 501,
            date: "2026-10-21",
            type: "Debit"
        },
        {
            id: 2,
            title: "Shoping",
            description: "Clothes",
            category: "Shopping",
            amount: 5001,
            date: "2026-10-21",
            type: "Credit"
        }
    ]

}

function reducer(state, action) {
    switch (action.type) {
        case "Add":

            const newExpence = {
                ...action.payLoad,
                id: new Date().getTime(),
            }
            return {
                ...state,
                ExpenseList: [...state.ExpenseList, newExpence]
            }
        case "Delete":
            const Delete = {

            }

        default:
            return state;
    }
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialArg)


    const handleAdd = (input) => {
        if (!input) {
            alert("All Field Required")
            return
        }

        dispatch({ type: "Add", payLoad: input })
    }

    const handleDelete = (id) => {
        dispatch({ type: "Delete", payLoad: id })
    }

    
    const editVal = ""
    const handleEdit = () => { }


    const debit = state.ExpenseList
        .filter((item) => item.type === "Debit")
        .reduce((total, item) => total + Number(item.amount || 0), 0);

    const credit = state.ExpenseList
        .filter((item) => item.type === "Credit")
        .reduce((total, item) => total + Number(item.amount || 0), 0);

    const balance = credit - debit;

    const value = {
        expenseList: state.ExpenseList,
        handleAdd,
        handleDelete,
        handleDelete,
        editVal,
        handleEdit,
        credit,
        debit,
        balance
    }


    return (
        <ExpenceContext.Provider value={value}>{children}</ExpenceContext.Provider>
    )
}

export default Context