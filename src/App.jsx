import { useState, useEffect } from "react";
import ToDoList from "./assets/components/ToDoList";
import TodoInput from "./assets/components/TodoInput";

function App() {
  const [todos, SetTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    SetTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    SetTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const toBeEdited = todos[index];
    setTodoValue(toBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    SetTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <ToDoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
