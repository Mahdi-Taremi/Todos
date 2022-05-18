import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoApp.css";
import Todo from "./Todo";
import NavBar from "./NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      Text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const CompleteTodo = (id) => {
    const index = todos.findIndex((Todo) => Todo.id === id);
    // console.log(index);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    // console.log(id);
    const filterTodos = todos.filter((t) => t.id !== id);
    setTodos(filterTodos);
  };
  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((Todo) => Todo.id === id);
    // console.log(index);
    const selectedTodo = { ...todos[index] };
    selectedTodo.Text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <NavBar unComletedTodos={todos.filter((t) => !t.isCompleted).length} />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={CompleteTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
