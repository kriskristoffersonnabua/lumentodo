import React, { useState, useEffect, useContext } from "react";
import TodoForm from "./TodoForm";
import { TodoContext } from "../context/TodoContext";

export default props => {
    const [isEditing, setIsEditing] = useState(false);
    const [todo, setTodo] = useState({});
    const { deleteTodo, updateTodo } = useContext(TodoContext);

    const toggleTodo = () => setIsEditing(!isEditing);
    const handleSaveEdits = new_description => {
        //handle save here
        setTodo(Object.assign(todo, { description: new_description }));
        updateTodo({ description: new_description }, todo.todo_id);
        toggleTodo();
        //handle fetch again
    };

    const delete_todo = () => {
        deleteTodo(todo.todo_id);
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
                <span class="level-right">{todo.updated_at}</span>
            </div>
            <button
                class="button is-primary is-small "
                onClick={toggleTodo}
                style={{ marginRight: 10 }}
            >
                Edit
            </button>
            <button class="button is-danger is-small" onClick={delete_todo}>
                Delete
            </button>
        </div>
    );
};
