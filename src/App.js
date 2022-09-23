import './App.scss'
import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Bottom from './components/Bottom'

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
			<TaskInput value={value} handleInput={handleInput} handleAddTask={handleAddTask} />
			<TaskList tasks={tasks} filters={filters} handleChangeStatus={handleChangeStatus} handleDelete={handleDelete} />
			<Bottom tasks={tasks} filters={filters} setFilters={setFilters} handleDeleteCompleted={handleDeleteCompleted} />
		</div>
	)
}

export default App
