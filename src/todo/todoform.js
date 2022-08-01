// @ts-check
/// <reference path="../typedefs.js" />

import React, { useEffect, useState } from "react";

/** 
 * TODO를 작성/수정하기 위한 입력 컴포넌트
 * 
 * @typedef {object} Props
 * @prop {(todo:Todo|null)=>any} onComplete
 * @prop {Todo=} todo
 * 
 * @param {Props} props
 */
export default function TodoForm(props) {

    const [todo, setTodo] = useState(props.todo||
        {
            title:'',
            content:'',
            id:undefined
        });


    /**
     *  @typedef {object} Event
     */

    /**
     * handle todo title change
     * 
     * @param {Event} e 
     */
    function handleTitleChange(e) {
        let t_todo = {
            title: e.target.value,
            content: todo?.content,
            id:todo?.id
        }
        setTodo(t_todo);
    }
    /**
     * handle todo content change
     * 
     * @param {Event} e 
     */
    function handleContentChange(e) {
        let t_todo = {
            title: todo?.title,
            content: e.target.value,
            id:todo?.id
        }
        setTodo(t_todo);
    }

    return (
        <div>
            <label>제목</label><input type="text" onChange={handleTitleChange} value={todo.title}/>
            <label>내용</label><textarea onChange={handleContentChange} value={todo.content}/>
            <button onClick={()=>props.onComplete(todo)}>저장</button>
            <button onClick={()=>props.onComplete(null)}>취소</button>
        </div>
    );
};