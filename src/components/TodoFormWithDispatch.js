import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { addTodoAction } from "../Reducers/TodoReducer";

const TodoFormWithDispatch = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    // addTodo(title, user);
    dispatch({
      type: addTodoAction,
      todo: {
        title,
        user,
      },
    });
    setUser("");
    setTitle("");
  };
  return (
    <form className="form" onSubmit={handleTodoSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className="input"
        type="text"
        placeholder="Todo user"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        required
      />

      <input className="input" type="submit" value="addTodo" />
    </form>
  );
};

export default TodoFormWithDispatch;
