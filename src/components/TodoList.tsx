import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  deleteTodo: (todoID: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, deleteTodo }) => {
  return (
    <ul>
      {items?.map((todo) => (
        <li key={todo?.id}>
          <span>{todo?.text}</span>
          <button onClick={() => deleteTodo(todo?.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
