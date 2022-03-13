import React, { useState } from "react";
import AddTodo from "./Components/addTodo/addTodo";
import TodoHeader from "./Components/todoHeader/todoHeader";
import backgroundImage from "./images/bg-desktop-dark.jpg";
import checkMark from "./images/icon-check.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { todo: "Preparing for the interview", complete: true },
    { todo: "Do English Assignment", complete: false },
    { todo: "Do a new react project", complete: false },
  ]);
  const toggleComplete = (i) => {
    setTodos(
      todos.map((todo, k) =>
        k === i ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };
  return (
    <div className="main-container">
      <div className="background-image">
        <img src={backgroundImage} alt="background" />
      </div>
      <section className="container">
        <TodoHeader />

        <AddTodo
          onSubmit={(todo) => setTodos([{ todo, complete: false }, ...todos])}
        />

        <div className="todo-items-container">
          <div className="list">
            {todos.map(({ todo, complete }, i) => (
              <div className="list-item">
                <div className="check-mark-container">
                  <div
                    className="check-mark"
                    onClick={() => toggleComplete(i)}
                    style={{
                      background: complete
                        ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
                        : "transparent",
                    }}
                  >
                    <img
                      src={checkMark}
                      alt="check mark"
                      onClick={() => toggleComplete(i)}
                      style={{
                        visibility: complete ? "visible" : "hidden",
                      }}
                    />
                  </div>
                </div>

                <div
                  className="item"
                  key={todo}
                  onClick={() => toggleComplete(i)}
                  style={{
                    textDecoration: complete ? "line-through" : "",
                    color: complete
                      ? " hsl(233, 14%, 35%)"
                      : "hsl(234, 39%, 85%)",
                  }}
                >
                  {todo}
                </div>
              </div>
            ))}
          </div>
          <div class="todo-items-info">
            <div class="items-left">{todos.length} items left</div>
            <div class="items-statuses">
              <span class="active" onClick={() => setTodos([...todos])}>
                All
              </span>
              <span>Active</span>
              <span>Completed</span>
            </div>
            <div class="items-clear">
              <span
                onClick={() =>
                  setTodos(todos.filter((i) => i.complete === false))
                }
              >
                Clear Completed
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
