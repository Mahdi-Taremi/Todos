import { useEffect, useRef, useState } from "react";
// import TodoList from "./TodoList";
import "./App.css";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Enter Todo !");
      return;
    }
    props.addTodoHandler(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* <input type="text" value={input} onChange={changeHandler}></input>
        <button type="submit">Add</button> */}
        {props.edit ? (
          <>
            <input
              type="text"
              value={input}
              onChange={changeHandler}
              placeholder="Update todo ..."
              ref={inputRef}
            ></input>
            <button type="submit">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={input}
              onChange={changeHandler}
              placeholder="add todo ..."
              ref={inputRef}
            ></input>
            <button type="submit">Add</button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
