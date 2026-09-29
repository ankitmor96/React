

const TodoList = ({ todos, handleSelect, handleDelete, handleCompleted }) => {

   
    console.log("todos:", todos);

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>sr</th>
                        <th>status</th>
                        <th>task</th>
                        <th>description</th>
                        <th colSpan={2}>action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((t, index) => {
                        return (
                            <tr key={t.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <input type="checkbox"
                                        checked={t.completed}
                                        onChange={() => handleCompleted(t.id)}
                                    />
                                </td>
                                <td>{t.task}</td>
                                <td>{t.description}</td>

                                <td>
                                    <button onClick={() => handleSelect(t)}>Update</button>
                                </td>

                                <td>
                                    <button onClick={() => handleDelete(t.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TodoList;