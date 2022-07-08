import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	// console.log(props.todo);
// debugger
	return (
		<ul className='todo-list'>
			{props.todo.map((todo) => {
		return	<TodoItem key={todo.id} todo={todo} onChange={props.onToggle} />
			})}
		</ul>
	);
};

export default TodoList;