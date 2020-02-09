import React, { useContext } from "react";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";
import { TodoContext } from "../context/TodoContext";

export default () => {
    const { todos } = useContext(TodoContext);

    return (
        <div class="container is-fluid">
            <div
                class="navbar has-background-light"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                    marginTop: 32,
                    marginBottom: 20
                }}
            >
                <h1 class="title">🦊 Fox Todo List 🦊</h1>
            </div>
            <TodoForm />
            {todos.map(todo => {
                return <Todo todo={todo} />;
            })}
        </div>
    );
};
