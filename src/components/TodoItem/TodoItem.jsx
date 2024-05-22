/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./TodoItem.css";

const TodoItem = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
  setEditing,
  editing,
}) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  useEffect(() => {
    if (editing !== todo.id) {
      setNewTitle(todo.title);
    }
  }, [editing, todo.title]);

  const handleEdit = () => {
    setEditing(todo.id);
  };

  const handleUpdate = () => {
    if (newTitle.trim()) {
      editTodo(todo.id, newTitle);
    }
  };

  return (
    <li className="todo-item">
      {editing === todo.id ? (
        <input
          type="text"
          className="edit-todo-input"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleUpdate}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleUpdate();
            }
          }}
          autoFocus
        />
      ) : (
        <>
          <span
            className={todo.completed ? "completed" : ""}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.title}
          </span>
          <div className="todo-buttons">
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
