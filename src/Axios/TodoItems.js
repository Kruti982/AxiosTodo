import React from "react";
import { Button } from "reactstrap";
// import Todos from "./Todos";

export default function TodoItems({ todoNew, onDelete }) {
  return (
    <div className="todoContainer">
      <ul>
        <li
          style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
        >
          <p>{todoNew.userId}</p>
          <p>{todoNew.id}</p>
          <p>{todoNew.title}</p>
          <p>{todoNew.completed}</p>
        </li>
      </ul>

      {/* <Button
        color="danger"
        onClick={() => {
          onDelete(todoNew);
        }}
      >
        Delete
      </Button> */}
      {/* <Todos /> */}
    </div>
  );
}
