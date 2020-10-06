import React from "react";
import Navbar from "./components/navbar";
import TodoForm from "./components/TodoForm";
import TodoFormWithDispatch from "./components/TodoFormWithDispatch";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <TodoList />
        <TodoFormWithDispatch />
      </TodoContextProvider>
    </div>
  );
}

export default App;
