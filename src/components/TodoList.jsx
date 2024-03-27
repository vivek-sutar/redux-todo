import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {

    const filteredTodos = useSelector((state)=>{
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;
        return todos.filter((todo)=>{
            const matchFilter = (filter==='COMPLETED' && todo.completed) || (filter==='INCOMPLETE' && !todo.completed) || (filter=="ALL" && todo);
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchFilter && matchSearch;
        })
    })

  return (
    <div>TodoList</div>
  )
}

export default TodoList