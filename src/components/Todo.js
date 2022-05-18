import "./App.css";

const Todo = ({ todo, onEdit, onComplete, onDelete }) => {
  return (
    <div className="todo">
      <div className={todo.isCompleted ? "completed" : ""}>{todo.Text}</div>
      <div className="todos">
        <button onClick={onEdit} className="btn_card">
          Edit
        </button>
        <button onClick={onComplete} className="btn_card">
          Complete
        </button>
        <button onClick={onDelete} className="btn_card">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
