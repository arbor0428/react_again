import React from 'react';

export default function Todo({ todo, onUpdate, onDelete }) {
    const {id, text, status} = todo;
    const handleDelete = () => {
        onDelete(todo);
    }
    const handleUpdate = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }
    return (
        <li>
            <input 
                type="checkbox" 
                id={id} 
                checked={status === 'completed'}
                onChange={handleUpdate}
            />
            <label htmlFor={id}>{text}</label>
            <button onClick={handleDelete}>delete</button>
        </li>
    );
}

