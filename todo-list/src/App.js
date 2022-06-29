import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  const [count, setCount] = useState();
  const handlerButton = (e) => {
    // const sendTodo = e.target.value;
    console.log(count);
    e.preventDefault();
    setCount('');
    localStorage.setItem('todo', JSON.stringify(count));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <input
          className="todo-input"
          placeholder="Введите задачу"
          value={count}
          onChange={(e) => setCount(e.target.value)}></input>
        <button onClick={handlerButton} className="todo-button">
          Создать
        </button>
        <TodoList takecount={count} />
      </div>

    </div>
  );
}

export default App;
