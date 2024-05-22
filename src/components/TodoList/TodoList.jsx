/* eslint-disable react/prop-types */
import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({
  todos,
  toggleComplete,
  deleteTodo,
  editTodo,
  setEditing,
  editing,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          setEditing={setEditing}
          editing={editing}
        />
      ))}
    </ul>
  );
};

export default TodoList;
