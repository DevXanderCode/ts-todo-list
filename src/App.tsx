import React, { useState } from "react";
import "./App.css";
import { TodoList, NewTodo } from "./components";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };

  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
