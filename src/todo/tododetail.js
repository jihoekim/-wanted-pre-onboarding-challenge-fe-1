// @ts-check
/// <reference path="../typedefs.js" />

import React from "react";

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
        <div>
            <label>제목</label><div>{todo.title?.toString()}</div>
            <label>내용</label><div>{todo.content?.toString()}</div>
            <button onClick={()=>handleModifyClick(todo)}>수정</button>
            <button onClick={()=>handleDeleteClick(todo)}>삭제</button>
        </div>
    );
};

export default TodoDetail;