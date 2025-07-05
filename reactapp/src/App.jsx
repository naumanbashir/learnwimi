import TodoCard from "./components/TodoCard.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState([
        'Go to Gym',
        'Do my breakfast',
        'Study some tutorials',
    ]);

    const [todoValue, setTodoValue] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddTodos = (newTodo) => {
        let newTodos = [...todos, newTodo];
        setTodos(newTodos);
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
        setTodos(newTodos);
    }

    const handleEditTodo = (index) => {
        const todoToBeEdited = todos[index];
        setTodoValue(todoToBeEdited);
        setEditingIndex(index);
    }

    const handleUpdateTodo = (updatedTodo) => {
        if (editingIndex === null || !updatedTodo.trim()) return;
        setTodos((prev) => {
            return prev.map((todo, todoIndex) => {
                return (editingIndex === todoIndex) ? updatedTodo : todo;
            })
        })
        setEditingIndex(null);
        setTodoValue("");
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
