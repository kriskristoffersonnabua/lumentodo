import React, { useState, useEffect } from 'react';

export default props => {
    const [isEdit, setIsEditForm] = useState(false);
    const [description, setDescription] = useState('');

    useEffect(() => {
        setIsEditForm(props.isEdit);
    }, []);

    useEffect(() => {
        if (isEdit) {
            setDescription(props.todo.description);
        }
    }, [isEdit]);

    const handleInputChange = evt => setDescription(evt.currentTarget.value);

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
                    onClick={!!props.handleSaveEdits && props.handleSaveEdits}
                    class="button is-small is-primary"
                    style={{ marginRight: 10 }}>
                    Save Edits
                </button>
            ) : (
                <button class="button is-small is-primary">Add Todo</button>
            )}
            {isEdit && (
                <button class="button is-small is-danger">Delete</button>
            )}
        </div>
    );
};
