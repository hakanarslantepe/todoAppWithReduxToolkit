import React from "react";
import { useSelector } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Actions from "./components/Actions";

const App = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="wrapper">
      <h1 className="logo">ToDo List w/ Redux Toolkit</h1>
      <TodoForm />
      <TodoList todos={todos} />
      <Actions />
    </div>
  );
};

export default App;