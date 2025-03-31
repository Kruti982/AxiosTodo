import React from "react";
import TodoItems from "./TodoItems";

export default function Todos(props) {
  return (
    <>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Add Todos Here!!</h2>
        <p>
          {props.todo.length !== 0
            ? props.todo.map((todos) => (
                <TodoItems
                  todoNew={todos}
                  key={todos.id}
                  onDelete={props.onDelete}
                />
              ))
            : "No items to display"}
        </p>
      </div>
    </>
  );
}
