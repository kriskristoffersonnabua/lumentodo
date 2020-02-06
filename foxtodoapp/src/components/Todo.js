import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';

export default props => {
    const [isEditing, setIsEditing] = useState(false);
    const [todo, setTodo] = useState({});

    const toggleTodo = () => setIsEditing(!isEditing);
    const handleSaveEdits = () => {
        //handle save here
        toggleTodo();
        //handle fetch again
    };

    useEffect(() => {
        setTodo(props.todo);
    }, []);

    return isEditing ? (
        <TodoForm isEdit={true} todo={todo} handleSaveEdits={handleSaveEdits} />
    ) : (
        <div class="box">
            <div class="level has-background-light" style={{ padding: 20 }}>
                <blockqoute class="level-left has-text-dark">
                    {todo.description}
                </blockqoute>
                <span class="level-right">{todo.updated}</span>
            </div>
            <button
                class="button is-primary is-small "
                onClick={toggleTodo}
                style={{ marginRight: 10 }}>
                Edit
            </button>
            <button class="button is-danger is-small ">Delete</button>
        </div>
    );
};
