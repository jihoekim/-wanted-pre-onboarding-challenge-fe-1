// @ts-check
/// <reference path="../typedefs.js" />

import React from "react";

import {
    Card,
    CardContent,
    Typography,
    Button,
    CardActions
} from "@mui/material";
/** 
 * @typedef {object} Props
 * @prop {Todo|null=} todo
 * @prop {function=} onModifyClick
 * @prop {function=} onDeleteClick
 * 
 * @param {Props} props
 */
function TodoDetail(props) {

    /**
     * @type Todo
     */
     let todo = {
        title:undefined,
        content:undefined,
        id:undefined
    }

    if (props.todo) {
        todo.title = props.todo.title;
        todo.content = props.todo.content;
        todo.id = props.todo.id;
    }

    /**
     * 
     * @param {Todo} todo 
     */
    function handleModifyClick(todo) {
        if (props.onModifyClick) props.onModifyClick(todo);
    }

    /**
     * 
     * @param {Todo} todo 
     */
     function handleDeleteClick(todo) {
        if (props.onDeleteClick) props.onDeleteClick(todo);
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                {todo.title?.toString()}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {todo.content?.toString()}
                </Typography>
                <Typography variant="body2">

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>handleModifyClick(todo)}>수정</Button>
                <Button size="small" onClick={()=>handleDeleteClick(todo)}>삭제</Button>
            </CardActions>
        </Card>
    );
};

export default TodoDetail;