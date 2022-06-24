import React from "react";
import "./App.css";
import { TodoList, NewTodo } from "./components";

function App() {
  const todos = [{ id: "t1", text: "Finish the course" }];

  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
