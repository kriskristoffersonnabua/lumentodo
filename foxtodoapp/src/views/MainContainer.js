import React from 'react';
import { TodoProvider } from '../context/TodoContext';
import Home from './Home';

export default () => {
    return (
        <TodoProvider>
            <Home />
        </TodoProvider>
    );
};
