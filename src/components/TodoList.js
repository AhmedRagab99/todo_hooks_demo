import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoDetails from "./TodoDetail";
import TodoDetailsWithDispatch from "./TodoDetailWithDispatch";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return todos.length ? (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => {
          return <TodoDetailsWithDispatch todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> No Todos yet</div>
  );
};

export default TodoList;
