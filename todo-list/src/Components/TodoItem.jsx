import React from 'react';

const TodoItem = (props) => {
	// debugger
	console.log(props);
	const todo = props.todo
	return (
		<li className='todo-block'>
			{todo.todoText}
			<input
				type='checkbox'
				checked={todo.checked}
				onChange={() => props.onChange(todo.id)}
			/>

		</li>
	);
};

export default TodoItem;