import { useContext, useState } from "react";
import { expenseContext } from "../Context/ExpenseContext";


const DashBoard = () => {
    

    const {debit, credit, balance } = useContext(expenseContext);

    return (
        <>
        
        <h2>DashBoard</h2>

        <div>
            <h4>Total Debit</h4>
            <p>{debit}</p>
        </div>

         <div>
            <h4>Total Credit</h4>
            <p>{credit}</p>
        </div>

         <div>
            <h4>Total Balance</h4>
            <p>{balance}</p>
        </div>

        </>
    )
};

export default DashBoard;