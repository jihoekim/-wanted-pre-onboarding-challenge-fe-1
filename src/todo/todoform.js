// @ts-check
/// <reference path="../typedefs.js" />

import React from "react";
/**
 * 새로운 TODO를 작성하기 위한 입력 컴포넌트
 */
export default function TodoForm(props) {


    /**
     * @type Todo
     */
    let todo = {
        title:null,
        content:null
    }

    /**
     *  @typedef {object} MouseEvent
     */

    /**
     * handle todo title change
     * 
     * @param {MouseEvent} e 
     */
    function handleTitleChange(e) {
        todo.title = e.target.value;
    }
    /**
     * handle todo content change
     * 
     * @param {MouseEvent} e 
     */
    function handleContentChange(e) {
        todo.content = e.target.value;
    }

    return (
        <div>
            <label>제목</label><input type="text" onChange={handleTitleChange}/>
            <label>내용</label><input type="textarea" onChange={handleContentChange} />
            <button onClick={()=>props.onComplete(todo)}>저장</button>
            <button onClick={()=>props.onComplete(null)}>취소</button>
        </div>
    );
};