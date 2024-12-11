import React, { useState } from "react";

const TodoInput = ({ handleAddTodos, todoValue, setTodoValue }) => {
  return (
    <header>
      <input
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        value={todoValue}
        placeholder="Enter Todos.."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
