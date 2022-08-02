// @ts-check

import React from "react";
import {
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';

/** 
 * @typedef {object} Props
 * @prop {string} value
 * @prop {boolean} selected
 * @prop {function|null} [onClick] callback for click
 * 
 * @param {Props} props
 */
function TodoListItem(props) {

    function handleClick() {
        if (props.onClick) props.onClick();
    }

    return (       
        <>
        <ListItem disablePadding divider selected={props.selected}>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={props.value} />
            </ListItemButton>
        </ListItem>
        </>
    );

};

export default TodoListItem;