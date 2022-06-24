import React, { useState } from "react";
import "./App.css";
import { TodoList, NewTodo } from "./components";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos?.filter((t) => t?.id !== id));
  };

  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList items={todos} deleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
