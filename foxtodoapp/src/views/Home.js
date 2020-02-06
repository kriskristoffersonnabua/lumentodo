import React from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

export default () => {
    return (
        <div class="container is-fluid">
            <div
                class="navbar has-background-light"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    marginTop: 32,
                    marginBottom: 20
                }}>
                <h1 class="title">🦊 Fox Todo List 🦊</h1>
            </div>
            <TodoForm />
            <Todo
                todo={{
                    description: 'Do laundry and eat chicken.',
                    updated: '12:30 pm'
                }}
            />
        </div>
    );
};
