import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLTETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionTypes";

export const addTodo = (text)=>({
    type:ADD_TODO,
    payload:{text}
})
 
export const toggleTodo = (id)=>({
    type:TOGGLE_TODO,
    payload:{id}
})

export const removeTodo = (id)=>({
    type:REMOVE_TODO,
    payload:{id}
})

export const markCompleted = (id)=>({
    type:MARK_COMPLTETED,
    payload:{id}
})

export const markIncomplete = (id)=>({
    type:MARK_INCOMPLETE,
    payload:{id}
})

export const filterTodos = (filter)=>({
    type:FILTER_TODOS,
    payload:{filter}
})

export const markAllCompleted = (filter)=>({
    type:MARK_ALL_COMPLETED,
    payload:{filter}
})


export const updateSearch = (searchTerm)=>({
    type:UPDATE_SEARCH_TERM,
    payload:{searchTerm}
})

    
