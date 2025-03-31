import { useState } from "react";
import "./App.css";
import Header from "./Axios/Header";
import Todos from "./Axios/Todos";
import axios from "axios";

export default function App() {
  const [todoTask, setTodos] = useState([
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data)),
  ]);
  {
    console.log(todoTask);
  }

  const onDelete = (todoNew) => {
    setTodos(
      todoTask.filter((e) => {
        return e !== todoNew;
      })
    );
  };

  return (
    <div>
      <Header title="My Todos" />
      {/* <Todos todo={todoTask} /> */}
      {/* {console.log(todoTask)} */}
      <Todos todo={todoTask} onDelete={onDelete} />
    </div>
  );
}
