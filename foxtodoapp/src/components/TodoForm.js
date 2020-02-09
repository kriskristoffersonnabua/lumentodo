import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default props => {
    const [isEdit, setIsEditForm] = useState(false);
    const [description, setDescription] = useState("");
    const { createTodo } = useContext(TodoContext);

    useEffect(() => {
        setIsEditForm(props.isEdit);
    }, []);

    useEffect(() => {
        if (isEdit) {
            setDescription(props.todo.description);
        }
    }, [isEdit]);

    const create_todo = () => {
        createTodo({
            description
        });
    };

    const handleInputChange = evt => setDescription(evt.currentTarget.value);
    const handle_save_edit = () => {
        props.handleSaveEdits(description);
    };

    return (
        <div class="box">
            <div class="field">
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        value={description}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            {isEdit ? (
                <button
                    onClick={handle_save_edit}
                    class="button is-small is-primary"
                    style={{ marginRight: 10 }}
                >
                    Save Edits
                </button>
            ) : (
                <button
                    class="button is-small is-primary"
                    onClick={create_todo}
                >
                    Add Todo
                </button>
            )}
            {isEdit && (
                <button class="button is-small is-danger">Delete</button>
            )}
        </div>
    );
};
