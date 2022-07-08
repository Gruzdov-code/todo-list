
import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {

  const [count, setCount] = useState([{
    id: Date.now(),
    todoText: 'ffffffffffff',
    checked: false,
  }]);
  console.log(count);
  // if (localStorage.getItem('todo')) {
  //   todoList = JSON.parse(localStorage.getItem('todo'))
  //   //ФУНКЦИЯ ВЫВОДА
  // }



  function newTodo(todoText) {
  setCount(
    count.concat([
      {
        todoText,
        id: Date.now(),
        checked: false,
      },
    ])
  );
}




  function toggleTodo(id) {
    setCount(count.map(todo => {
      if (todo.id === id) {
    todo.checked = !todo.checked
      }
      return todo
})
    )
  }

  function removeTodo(id) {
    setCount(count.filter(todo => todo.id !== id))
  }

  return (
    <div className="wrapper">
      <AddTodo newTodo={newTodo} />
      {count.length ?
        (<TodoList todo={count} onToggle={toggleTodo} />)
        :
        (<p>Бездельник!</p>)
}
      </div>


  );
}

export default App;
