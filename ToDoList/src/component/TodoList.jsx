

const TodoList = ({todos,handleSelect,handleDelete}) => {
    return (
        <>
        <table border={1}>
            <thead>
                <tr>
                    <th>sr</th>
                    <th>task</th>
                    <th>description</th>
                    <th>action</th>
                    </tr>
            </thead>
            <tbody>
                {todos.map((t,index)=>{
                    return(
                        <tr key={t.id}>
                            <td>{index+1}</td>
                            <td>{t.task}</td>
                            <td>{t.description}</td>

                            <td>
                                <button onClick={()=> handleSelect(t)}>Update</button>
                            </td>

                            <td>
                                <button onClick={()=> handleDelete(t.id)}>Delete</button>
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