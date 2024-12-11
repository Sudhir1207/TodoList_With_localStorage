import React from "react";

const TodoCard = (props) => {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button
            onClick={() => {
              handleEditTodo(index);
            }}
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              handleDeleteTodo(index);
            }}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoCard;
