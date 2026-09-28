import { useState } from "react";
import AddToDo_01 from "./component/AddToDo_01.jsx";
import TodoList from "./component/TodoList.jsx";


const App = () => {

  const initialsTodo = [
    {
      id: 1,
      task: "learn react",
      description: "how to learn react"
    },
    {
      id: 2,
      task: "practice react",
      description: "how to learn react"
    }
  ];

  const [todos, setTodos] = useState(initialsTodo);

  const handleAdd = (input) => {

    const newTodo = {
      id : new Date().getTime(),
      ...input
    };

    setTodos((p)=> [ ...p , newTodo ])

  };

  const [selectedTodo,setSeclectedTodo] = useState(null);

  const handleSelect = (todo) => {
    setSeclectedTodo(todo);
  };

  const handleUpdate = (updatedTodo) => {
    setTodos((p)=>{
      return p.map((todo)=>{
        if(todo.id === updatedTodo.id){
          return updatedTodo;
        }
        return todo;
      });
    });

    setSeclectedTodo(null);

  };

  const handleDelete = (id) => {
       setTodos((p)=>{
        return p.filter((todo)=> todo.id !==id)
       });
  };


  return (
    <>

    <h1>Todo list</h1>

      <AddToDo_01  handleAdd={handleAdd}  selectedTodo={selectedTodo} handleUpdate={handleUpdate} />

      <br />
      <br />

      <TodoList todos={todos} handleSelect={handleSelect} handleDelete={handleDelete}/>

    </>
  );
};

export default App;