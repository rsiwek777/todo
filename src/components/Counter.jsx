function Counter({ tasks }) {
	return <span>{tasks.filter(task => !task.status).length} items left</span>
}

export default Counter
