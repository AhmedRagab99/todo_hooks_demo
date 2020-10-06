import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { removeTodoAction } from "../Reducers/TodoReducer";

const TodoDetailsWithDispatch = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li onClick={() => dispatch({ type: removeTodoAction, id: todo.id })}>
      <div className="title">{todo.title}</div>
      <div className="user">{todo.user}</div>
    </li>
  );
};

export default TodoDetailsWithDispatch;
