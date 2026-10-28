
import { useContext, useState } from 'react'
import { ExpenceContext } from '../Context/ExpenseContext'

const ExpenseList = () => {

    const { expenseList, handleDelete, handleEdit, credit, debit, balance } = useContext(ExpenceContext)

    const [expenseQuery, setExpenseQuery] = useState({
        title: "",
        category: "",
        type: "",
        sort: ""
    })

    const handleChange = (field, e) => {

        setExpenseQuery((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })

    }

    const filterList = expenseList
        .filter((l) => l.title.toLowerCase().includes(expenseQuery.title.toLowerCase()))
        .filter((l) => l.type.includes(expenseQuery.type))
        .filter((l) => l.category.includes(expenseQuery.category))


    const FilterList = [...filterList].sort((a, b) => {
        if (expenseQuery.sort === "ascending") {
            return a.id - b.id
        }

        if (expenseQuery.sort === "descending") {
            return b.id - a.id
        }

        if (expenseQuery.sort === "moneyAsc") {
            return Number(a.amount) - Number(b.amount)
        }

        if (expenseQuery.sort === "moneyDsc") {
            return Number(b.amount) - Number(a.amount)
        }
    })


    return (

        <>

            <div>
                <h2>Credit: ₹{credit}</h2>
                <h2>Debit: ₹{debit}</h2>
                <h2>Balance: ₹{balance}</h2>
            </div>


            <form action="">

                <br />
                <br />

                <label htmlFor="title">Title</label>

                <input
                    type="text"
                    value={expenseQuery.title}
                    onChange={((e) => handleChange("title", e))}
                />


                <label htmlFor="type">Type</label>

                <select value={expenseQuery.type} onChange={((e) => handleChange("type", e))}>
                    <option value="">Select</option>
                    <option value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                </select>


                <label htmlFor="category">category</label>

                <select value={expenseQuery.category} onChange={((e) => handleChange("category", e))}>
                    <option value="">select</option>
                    <option value="Food & Dining">Food & Dining</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Housing & Bills">Housing & Bills</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Healthcare">Healthcare</option>
                </select>

                <label htmlFor="sort">Sort</label>
                <select value={expenseQuery.sort} onChange={((e) => handleChange("sort", e))}>
                    <option value="">select</option>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                    <option value="moneyAsc">Money Ascending</option>
                    <option value="moneyDsc">Money Descending</option>
                </select>

                <button
                    type="button"
                    onClick={() =>
                        setExpenseQuery({
                            title: "",
                            category: "",
                            type: "",
                            sort: "",
                        })
                    }
                >
                    Clear Filter
                </button>

            </form>

            <br /><br /><br />
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {FilterList.map((t, index) => {
                        return (

                            <tr key={t.id}>

                                <td>{index + 1}</td>
                                <td>{t.title}</td>
                                <td>{t.description}</td>
                                <td>{t.category}</td>
                                <td>{t.amount}</td>
                                <td>{t.date}</td>
                                <td>{t.type}</td>
                                <td><button onClick={() => handleEdit(t.id)}>Edit</button></td>
                                <td><button onClick={() => handleDelete(t.id)}>Delete</button></td>

                            </tr>

                        )
                    })}
                </tbody>

            </table>
        </>
    )
}

export default ExpenseList