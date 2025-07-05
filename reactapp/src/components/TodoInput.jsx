import React from 'react';

function TodoInput(props) {
    const { handleAddTodos, handleUpdateTodo, todoValue, setTodoValue, isEdited } = props;

    return (
        <header>
            <input value={todoValue}
                   onChange={(e) => setTodoValue(e.target.value)}
                   type="text" placeholder="Enter Todo..."
            />
            { isEdited ?
                <button onClick={() => {
                    handleUpdateTodo(todoValue);
                }}>Update</button>
            :
                <button onClick={() => {
                    handleAddTodos(todoValue);
                }}>Add</button>
            }

        </header>
    );
}

export default TodoInput;