import "./TodoList.css";
import Todo from "./Todo";
import { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, Text: "", isCompleted: false });
  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, Text: "" });
  };
  const renderTodos = () => {
    if (todos.length === 0) return <p>add some Todos</p>;

    return (
      <div className="conteiner">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onEdit={() => setEdit(todo)}
              onComplete={() => onComplete(todo.id)}
              onDelete={() => onDelete(todo.id)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm addTodoHandler={editTodo} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
