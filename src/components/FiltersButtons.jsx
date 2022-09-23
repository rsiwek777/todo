function FiltersButtons({ filters, setFilters }) {
	return (
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
	)
}

export default FiltersButtons
