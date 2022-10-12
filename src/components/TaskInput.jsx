function TaskInput({ value, handleInput, handleAddTask }) {
	return (
		<input
			className='input'
			placeholder='What needs to be done?'
			type='text'
			value={value}
			onChange={handleInput}
			onKeyUp={handleAddTask}
		/>
	)
}

export default TaskInput
