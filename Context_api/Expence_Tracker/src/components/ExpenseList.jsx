import React, { useContext, useState } from "react";
import { expenseContext } from "../Context/ExpenseContext";


const ExpenseList = () => {

    const { expenseList , handleEdit ,handleDelete } = useContext(expenseContext)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseList.map((t, index) => {
                        return (
                            <tr key={t.id}>
                                <td>{index + 1}</td>
                                <td>{t.Title}</td>
                                <td>{t.Description}</td>
                                <td>{t.Amount}</td>
                                <td>{t.Date}</td>
                                <td>{t.Category}</td>
                                <td>{t.Type}</td>

                                <td>
                                    <button onClick={() => handleEdit(t.id)}>update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(t.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

};

export default ExpenseList;