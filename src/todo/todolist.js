// @ts-check

import React, { useState } from "react";
import TodoListItem from "./todolistiteml.js";

/** 
 * @typedef {object} Props
 * @prop {Array} todos
 * @prop {string|null=} selected
 * @prop {function|null} [onSelect] callback for selected Todo changes
 * 
 * @param {Props} props
 */
function TodoList(props) {

    const [selected, setSelected] = useState(props.selected);

    /**
     * 
     * @param {string} id 
     */
    function handleSelected(id) {
        setSelected(id);
        if (props.onSelect) props.onSelect(id);
    }

    return (
        <div>
            <ul>
            {
                props.todos && props.todos.length > 0 ?
                props.todos.map(
                    (todo) => <TodoListItem 
                                key={todo.id} 
                                value={todo.title} 
                                onClick={()=>handleSelected(todo.id)}/>) 
                : <span>"no todos"</span>
            }
            </ul>
        </div>
    );
};

export default TodoList;