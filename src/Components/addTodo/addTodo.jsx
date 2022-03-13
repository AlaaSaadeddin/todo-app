import React, { useState } from "react";
import "./addTodo.css";

const useInputValue = (initialValue) => {
  // custom hook
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};


const AddTodo = ({ onSubmit }) => {

  const { resetValue, ...text } = useInputValue("");

  return (
    <div className="form-container">
      <div className="check-container">
        <div className="check"></div>
      </div>
      <div className="new-todo-input">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
          }}
        >
          <input placeholder="Create a new todo..." {...text} />
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
