import React, { useState, useEffect } from 'react';

export const TodoContext = React.createContext();

export const TodoProvider = props => {
    const [state, setState] = useState({});
    return (
        <TodoContext.Provider value={state}>
            {props.children}
        </TodoContext.Provider>
    );
};
