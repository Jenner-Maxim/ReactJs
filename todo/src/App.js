import { useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left</div>
    </>
  );
}

export default App;
