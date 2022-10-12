function DeleteCompleted({ tasks, handleDeleteCompleted }) {
	return (
		<>{tasks.some(task => task.status) && <button onClick={() => handleDeleteCompleted()}>Clear completed</button>}</>
	)
}

export default DeleteCompleted
