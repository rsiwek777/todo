function TaskItem({ task, handleChangeStatus, handleDelete }) {
	return (
		<li key={task.id} className='task'>
			<span className={task.status ? 'status active' : 'status'} onClick={() => handleChangeStatus(task)}></span>
			<span>{task.name}</span>
			<button className='task-delete' onClick={() => handleDelete(task)}>
				x
			</button>
		</li>
	)
}

export default TaskItem
