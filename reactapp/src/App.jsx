import TodoCard from "./components/TodoCard.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useEffect, useState} from "react";

function App() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let localTodos = localStorage.getItem("todos");
        if (!localTodos) return;
        setTodos(JSON.parse(localTodos).todos);
    }, [])

    const [todoValue, setTodoValue] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddTodos = (newTodo) => {
        let newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodoValue("");
        persistData(newTodos)
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
        setTodos(newTodos);
        // persistData(newTodos);
    }

    const handleEditTodo = (index) => {
        const todoToBeEdited = todos[index];
        setTodoValue(todoToBeEdited);
        setEditingIndex(index);
    }

    const handleUpdateTodo = (updatedTodo) => {
        if (editingIndex === null || !updatedTodo.trim()) return;
        const newTodos = todos.map((todo, todoIndex) => {
            return (editingIndex === todoIndex) ? updatedTodo : todo;
        })

        setTodos(newTodos);
        persistData(newTodos);

        setEditingIndex(null);
        setTodoValue("");
    }

    function persistData(newTodos) {
        localStorage.setItem('todos', JSON.stringify({
            todos: newTodos
        }));
    }

    return (
        <>
            <TodoInput handleAddTodos={handleAddTodos}
                       handleUpdateTodo={handleUpdateTodo}
                       todoValue={todoValue}
                       setTodoValue={setTodoValue}
                       isEdited={editingIndex !== null}
            />
            <TodoList todos={todos}
                      handleDeleteTodo={handleDeleteTodo}
                      handleEditTodo={handleEditTodo}
            />
        </>
    )
}

export default App
