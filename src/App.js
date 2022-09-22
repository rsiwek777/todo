import './App.scss'
import { useState } from 'react'

const gen =
	(id = 0) =>
	() =>
		id++
const genId = gen()

function App() {
	const [value, setValue] = useState('')
	const [tasks, setTask] = useState([])
	const [filters, setFilters] = useState('all')

	const handleInput = event => {
		setValue(event.target.value)
	}

	const handleAddTask = event => {
		if (event.key === 'Enter' && value.trim() !== '') {
			setTask([
				...tasks,
				{
					id: genId(),
					name: value.trim(),
					status: false,
				},
			])
			setValue('')
		}
	}

	const handleChangeStatus = todo => {
		const updatedTasks = tasks.map(task => {
			if (task === todo) {
				task.status = !task.status
			}
			return task
		})

		setTask(updatedTasks)
	}

	const handleDelete = todo => {
		const updatedTasks = tasks.filter(task => task !== todo)
		setTask(updatedTasks)
	}

	const handleDeleteCompleted = () => {
		setTask(tasks.filter(task => !task.status))
	}

	return (
		<div className='App'>
			<h1 className='heading'>todos</h1>
			<input
				className='input'
				placeholder='What needs to be done?'
				type='text'
				value={value}
				onChange={handleInput}
				onKeyUp={handleAddTask}
			/>
			<ul className='tasks'>
				{tasks
					.filter(task => (filters === 'all' ? true : task.status === filters))
					.map(task => (
						<li key={task.id} className='task'>
							<span
								className={task.status ? 'status active' : 'status'}
								onClick={() => handleChangeStatus(task)}></span>
							<span>{task.name}</span>
							<button className='task-delete' onClick={() => handleDelete(task)}>
								x
							</button>
						</li>
					))}
			</ul>
			<div className='bottom'>
				<span>{tasks.filter(task => !task.status).length} items left</span>
				<div className='buttons'>
					<button className={filters === 'all' ? 'filter-active' : ''} onClick={() => setFilters('all')}>
						All
					</button>
					<button className={filters === false ? 'filter-active' : ''} onClick={() => setFilters(false)}>
						Active
					</button>
					<button className={filters === true ? 'filter-active' : ''} onClick={() => setFilters(true)}>
						Completed
					</button>
				</div>
				<button onClick={() => handleDeleteCompleted()}>Clear completed</button>
			</div>
		</div>
	)
}

export default App
