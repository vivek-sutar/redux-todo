import { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addTodo, updateSearch } from '../redux/action'
import FilterButton from './FilterButton'
import TodoList from './TodoList'
const Todo = () => {
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState("")
    const [newSearchTerm, setNewSearchTerm] = useState("")
    const handleAddTodo = (text) => {
        dispatch(addTodo(text))
    }
    const handleAddTodoClick = () => {
        if (newTodoText.trim() != '') {
            handleAddTodo(newTodoText.trim());
        }
    }
    const handleSearchTerm = (text) => {
        setNewSearchTerm(text);
        dispatch(updateSearch(text))
    }
    return (
        <section className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6text-2xl font-bold text-center uppercase">
                Personal Todo Application
            </h2>
            <div className="flex items-center mb-4">
                <input type="text" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    id='addTodoInput' name='addTodoInput' value={newTodoText}
                    onChange={(el) => setNewTodoText(el.target.value)} />
                <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                    onClick={handleAddTodoClick}><FaPlus /></button>
            </div>
            <div className='flex items-center justify-between'>
                <FilterButton />
                <div className="flex items-center mb-4">
                    <input type="text" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        name='searchTerm' id='searchTerm' value={newSearchTerm} onChange={(el) => handleSearchTerm(el.target.value)} />
                    <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                    ><FaSearch /></button>
                </div>
            </div>
            <TodoList/>
        </section>
    )
}

export default Todo