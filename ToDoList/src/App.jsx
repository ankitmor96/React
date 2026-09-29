import { useState } from "react";
import AddToDo_01 from "./component/AddToDo_01.jsx";
import TodoList from "./component/TodoList.jsx";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";


const App = () => {

  const initialsTodo = [
    {
      id: 1,
      task: "learn react",
      description: "how to learn react",
      completed: false
    },
    {
      id: 2,
      task: "practice react",
      description: "how to learn react",
      completed: false
    }
  ];

  const [todos, setTodos] = useState(initialsTodo);

  const handleAdd = (input) => {

    const newTodo = {
      id: new Date().getTime(),
      ...input,
      completed: false
    };

    setTodos((p) => [...p, newTodo])

  };

  const [selectedTodo, setSeclectedTodo] = useState(null);

  const handleSelect = (todo) => {
    setSeclectedTodo(todo);
  };

  const handleUpdate = (updatedTodo) => {
    setTodos((p) => {
      return p.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
    });

    setSeclectedTodo(null);

  };

  const handleDelete = (id) => {
    setTodos((p) => {
      return p.filter((todo) => todo.id !== id)
    });
  };

  const handleCompleted = (id) => {
    setTodos((p) => {
      return p.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;

      });
    });
  };


  return (
    <>

      <h1>Todo list</h1>

      <AddToDo_01 handleAdd={handleAdd} selectedTodo={selectedTodo} handleUpdate={handleUpdate} />

      <br />
      <br />

      <Container className="dashbord">

        <h2 className="dashbord-title text-center">
          Dashboard
        </h2>

        <Row>

          <Col md={4}>
            <Card className="dashbord-card">
              <Card.Body>
                <Card.Title>Total</Card.Title>
                <h2>{todos.length}</h2>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashbord-card">
              <Card.Body>
                <Card.Title>Completed</Card.Title>

                <h2>
                  {todos.filter((todo) => todo.completed).length}
                </h2>

              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashbord-card">
              <Card.Body>
                <Card.Title>Uncompleted</Card.Title>

                <h2>
                  {todos.filter((todo) => !todo.completed).length}
                </h2>

              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>

      <br />
      <br />

      <TodoList todos={todos} handleSelect={handleSelect} handleDelete={handleDelete} handleCompleted={handleCompleted} />

    </>
  );
};

export default App;