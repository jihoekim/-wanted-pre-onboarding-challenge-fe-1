// @ts-check

import React from "react";

/** 
 * @typedef {object} Props
 * @prop {string} value
 * @prop {function|null} [onClick] callback for click
 * 
 * @param {Props} props
 */
function TodoListItem(props) {

    function handleClick() {
        if (props.onClick) props.onClick();
    }

    return <li onClick={handleClick}>{props.value}</li>;

};

export default TodoListItem;