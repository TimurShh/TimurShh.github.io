import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
    console.log("1");
    if (edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
  };
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
