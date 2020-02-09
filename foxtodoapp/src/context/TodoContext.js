import React, { useState, useEffect } from "react";

export const TodoContext = React.createContext();

export const TodoProvider = props => {
    const [todos, setTodos] = useState([]);
    const API = "localhost:3000";

    const getAllTodos = () => {
        fetch(`http://${API}/todos`)
            .then(result => result.json())
            .then(json => setTodos(json));
    };

    const createTodo = data => {
        fetch(`http://${API}/todos`, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(() => {
            getAllTodos();
        });
    };

    const updateTodo = (data, todo_id) => {
        console.log(data);
        fetch(`http://${API}/todos/${todo_id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }).then(() => {
            getAllTodos();
        });
    };

    const deleteTodo = todo_id => {
        console.log(todo_id);
        fetch(`http://${API}/todos/${todo_id}`, {
            method: "DELETE",
            body: null
        });
    };

    useEffect(() => {
        getAllTodos();
    }, []);

    return (
        <TodoContext.Provider
            value={{ todos, getAllTodos, createTodo, updateTodo, deleteTodo }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};
