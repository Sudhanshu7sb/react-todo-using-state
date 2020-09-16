import React from "react";

export default function TodoList(props){
    return(
        <>
        <ul>
        {props.filterTodos &&
          props.filterTodos.map((todo, i) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => props.handleToggle(todo.id)}
              />
              <p>{todo.text}</p>
              <span onClick={() => props.handleDelete(todo.id)}>X</span>
            </li>
          ))}
        </ul>
        </>
    )
}