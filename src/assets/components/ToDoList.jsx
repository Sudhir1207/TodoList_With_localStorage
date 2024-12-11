import React, { useState } from "react";
import TodoCard from "./TodoCard";

const ToDoList = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          key={todoIndex}
          index={todoIndex}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default ToDoList;
