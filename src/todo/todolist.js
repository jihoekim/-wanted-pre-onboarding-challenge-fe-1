// @ts-check

import React from "react";
import TodoListItem from "./todolistiteml.js";

/** 
 * @typedef {object} Props
 * @prop {Array} todos
 * 
 * @param {Props} props
 */
function TodoList(props) {

    return (
        <div>
            <ul>
            {
                props.todos && props.todos.length > 0 ?
                props.todos.map((todo) => <TodoListItem key={todo.id} value={todo.title} />) : "no todos"
            }
            </ul>

        </div>
    );
};

export default TodoList;