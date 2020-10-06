import React, { useState, useEffect, createContext, useReducer } from "react";
import { TodoReducer } from "../Reducers/TodoReducer";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  //   const [todos, setTodos] = useState([
  //     { title: "todo task 1", user: "Ahmed", id: 1 },
  //     { title: "todo task 2", user: "mohamed", id: 2 },
  //     { title: "todo task 3", user: "khaled ", id: 3 },
  //   ]);
  const [todos, dispatch] = useReducer(TodoReducer, [], () => {
    const localStoorageData = localStorage.getItem("todos");
    return localStoorageData ? JSON.parse(localStoorageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // functions to bind to other components

  //   const addTodo = (title, user) => {
  //     setTodos([
  //       ...todos,
  //       { title: title, user: user, id: Number(Math.random() * 2) },
  //     ]);
  //   };

  //   const removeTodo = (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   };

  // provide the functions to use in other components
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
