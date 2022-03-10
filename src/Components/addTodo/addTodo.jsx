import React, { useState } from "react";
import "./addTodo.css";

const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState("");
  console.log(value);
  console.log(setValue);
  const resetValue = () => setValue("");

  return (
    
      <form onSubmit={e => {
          e.preventDefault();
          onSubmit(value);
          resetValue();
      }}>
      <input
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      </form>
 
  );
};

export default AddTodo;
