import React, { useState } from 'react';

const AddTodo = (props) => {

const [value, setValue] = useState('')

  function handlerButton(e) {
    console.log(value);
    if (value.trim()) {
      console.log(value);

      // debugger
      props.newTodo(value);
      console.log(value);

      setValue("");

      //ФУНКЦИЯ ВЫВОДА
      localStorage.setItem("todo", JSON.stringify(value));
    }
    // ИЛИ ТУТ
    e.preventDefault();
  }

  return (
    <div className="container">
      <input
        className="todo-input"
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={handlerButton} className="todo-button">
        Создать
      </button>
    </div>
  );
};;

export default AddTodo;