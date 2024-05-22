/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit" className="add-todo-button">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
