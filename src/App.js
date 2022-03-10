import React, { useState } from "react";
import "./App.css";
import AddTodo from "./Components/addTodo/addTodo";
import TodoHeader from "./Components/todoHeader/todoHeader";
import backgroundImage from "./images/bg-desktop-dark.jpg";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="main-container">
      <div className="background-image">
        <img src={backgroundImage} alt="background" />
      </div>
      <section className="container">
        <TodoHeader />

        <AddTodo onSubmit={(todo) => setTodos([todo, ...todos])} />

        <div>
          {todos.map((todo) => (
            <div key={todo}>{todo}</div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
