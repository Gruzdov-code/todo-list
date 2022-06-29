import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	console.log(props.takecount);
	return (
		<div className='todo-list'>
			<TodoItem takecount={props.takecount} />
		</div>
	);
};

export default TodoList;