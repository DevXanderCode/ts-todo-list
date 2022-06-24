import React from "react";
import { Todo } from "../todo.model";

interface TodoListProps {
  items: Todo[];
  deleteTodo: (todoID: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, deleteTodo }) => {
  return (
    <ul>
      {items?.map((todo) => (
        <li key={todo?.id}>
          <span>{todo?.text}</span>
          <button onClick={deleteTodo.bind(null, todo?.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
