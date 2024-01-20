import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState([]);
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) => {
        setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)))
    }
    const handleDelete = (deleted) => {
        setTodos(todos.filter((todo)=>(todo.id !== deleted.id)));
    }

    const filtered = getFilteredItems(todos, filter);
    return (
        <ul>
            {filtered.map((item)=>(
                <Todo 
                    key={item.id}
                    todo={item} 
                    onUpdate={handleUpdate} 
                    onDelete={handleDelete} 
                />
            ))}
            <AddTodo onAdd={handleAdd} />
        </ul>
    );
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}

