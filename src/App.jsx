import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Form from "./components/Form";
import ListTodo from "./components/ListTodo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (val) => {
    if (!val) {
      toast.error("Please fill out input");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      name: val,
      isDone: false,
    };

    setTodos([...todos, newTodo]);

    toast.success("Adding todo is success");
  };

  return (
    <div>
      <h1>TODOLIST</h1>
      <Form handleAddTodo={handleAddTodo} />
      <ListTodo todos={todos} />
      <ToastContainer />
    </div>
  );
};

export default App;
