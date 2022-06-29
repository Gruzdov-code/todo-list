import React from 'react';

const TodoItem = (props) => {
	return (
		<div className='todo-block'>
			<p>{props.takecount}</p>


		</div>
	);
};

export default TodoItem;