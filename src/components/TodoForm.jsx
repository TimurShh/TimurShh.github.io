import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Добавьте задание"
        value={input}
        name="text"
        className="todo-input"
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button className="todo-button">Добавить!</button>
    </form>
  );
}

export default TodoForm;
