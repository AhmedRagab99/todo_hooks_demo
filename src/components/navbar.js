import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="navbar">
      <h1>simple TodoList App </h1>
      <p> have {todos.length} todos </p>
    </div>
  );
};

export default Navbar;
