import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodos, markAllCompleted } from '../redux/action'

const FilterButton = () => {
    const currentFilter = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const handleFilter = (filter) => {
        dispatch(filterTodos(filter))
    }

    return (
        <>
            <div className='flex space-x-4 items-center'>
                <select name="filter" id="filter" className='text-sm px-2 py-1 rounded border-gray-300 focus:outline-none'
                    value={currentFilter}
                    onChange={(el) => handleFilter(el.target.value)}>
                    <option value="ALL">Default</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="INCOMPLETE">INCOMPLETE</option>
                </select>
            </div>
            <button className="px-2-py-1 bg-purple-500 text-white ml-2 rounded"
                onClick={() => dispatch(markAllCompleted())}>
                Mark All Completed
            </button>
        </>
    )
}

export default FilterButton