import Counter from './Counter'
import DeleteCompleted from './DeleteCompleted'
import FiltersButtons from './FiltersButtons'

function Bottom({ tasks, filters, setFilters, handleDeleteCompleted }) {
	return (
		<div className='bottom'>
			<Counter tasks={tasks} />
			<FiltersButtons filters={filters} setFilters={setFilters} />
			<DeleteCompleted tasks={tasks} handleDeleteCompleted={handleDeleteCompleted} />
		</div>
	)
}

export default Bottom
