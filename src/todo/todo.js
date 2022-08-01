// @ts-check
/// <reference path="../typedefs.js" />

import React from "react";
import { useEffect, useState } from "react";
import getTodos, * as todoService from "../api_service/todo.service";
import TodoDetail from "./tododetail";
import TodoList from "./todolist";
import TodoForm from "./todoform";

/** 
 * 
 * @param {object} props
 */
function Todo(props) {

    const [todos, setTodos] = useState([]);
    const [todoformview, setTodoFormView] = useState(false);
    const [detailtodoview, setDetailTodoView] = useState(null);
    const [modifytodoview, setModifyTodoView] = useState(null);

    const DETAIL_VIEW_CONTENT = {
        DETAIL: "DETAIL",
        NEW: "NEW",
        MODIFY: "MODIFY"
    }

    useEffect(() => {
        async function initializeTodos() {
            try {
                const todos = await getTodos();
                // @ts-ignore
                setTodos(todos);
            } catch (error) {
                if (error.response?.data?.details) {
                    console.log(error.response.data.details)
                } else {
                    console.error(error.response);
                }
            }
        };
        initializeTodos();
    },[]);
    
    /**
     * 상세보기 영역의 컴포넌트 선택
     * 상세/수정/신규
     * 
     * @param {string=} which
     * @param {Todo=} todo 
     */
    function selectDetailViewContent(which, todo) {
        switch (which) {
            case DETAIL_VIEW_CONTENT.DETAIL:
                // @ts-ignore
                setDetailTodoView(todo);
                setModifyTodoView(null);
                setTodoFormView(false);
                break;
            case DETAIL_VIEW_CONTENT.MODIFY:
                setDetailTodoView(null);
                // @ts-ignore
                setModifyTodoView(todo);
                setTodoFormView(false);
                break;
            case DETAIL_VIEW_CONTENT.NEW:
                setDetailTodoView(null);
                setModifyTodoView(null);
                setTodoFormView(true);
                break;
            default:
                setDetailTodoView(null);
                setModifyTodoView(null);
                setTodoFormView(false);
        }
    }
    /**
     * 할일 작성 폼의 저장/취소 처리
     * 
     * @param {Todo|null=} todo 
     */
    async function newTodo(todo) {
        if (todo) {
            try {
                const data = await todoService.createTodo(todo);
                // @ts-ignore
                setTodos(todos.concat([data]));
                selectDetailViewContent(DETAIL_VIEW_CONTENT.DETAIL, data);
            } catch (error) {
                if (error.response?.data?.details) {
                    console.log(error.response.data.details)
                } else {
                    console.error(error.response);
                }
            }            
        }
    }

    /**
     * 할일 수정 폼의 저장/취소 처리
     * 
     * @param {Todo|null=} todo 
     */
    async function modifyTodo(todo) {
        if (todo) {
            try {
                const data = await todoService.updateTodo(todo);
                /**
                 * @type Array.<Todo>
                 */
                const t_todos = [...todos];
                // @ts-ignore
                setTodos(t_todos.map((t_todo)=>t_todo.id===todo.id?todo:t_todo));
                selectDetailViewContent(DETAIL_VIEW_CONTENT.DETAIL, data);
            } catch (error) {
                if (error.response?.data?.details) {
                    console.log(error.response.data.details)
                } else {
                    console.error(error.response);
                }
            }            
        }
    }

    /**
     * 목록에서 할일을 선택하면 상세 내용 보여주기
     * 
     * @param {string} id 
     */
    async function handleSelected(id) {
        try {
            const todo = await todoService.getTodo(id);
            // @ts-ignore
            selectDetailViewContent(DETAIL_VIEW_CONTENT.DETAIL, todo);
        } catch (error) {
            if (error.response?.data?.details) {
                console.log(error.response.data.details)
            } else {
                console.error(error.response);
            }
        }
    }

    /**
     * 수정 버튼 클릭시 동작
     * 
     * @param {Todo} todo 
     */
    function handleModifyClick(todo) {
        if (todo) {
            selectDetailViewContent(DETAIL_VIEW_CONTENT.MODIFY, todo);
        }
    }

    /**
     * 삭제 버튼 클릭시 동작
     * 
     * @param {Todo} todo 
     */
    async function handleDeleteClick(todo) {
        if (todo) {
            try {
                const data = await todoService.deleteTodo(todo);
                /**
                 * @type Array.<Todo>
                 */
                const t_todos = [...todos];
                // @ts-ignore
                setTodos(t_todos.filter((t_todo)=> t_todo.id!==todo.id));
                selectDetailViewContent();
            } catch (error) {
                if (error.response?.data?.details) {
                    console.log(error.response.data.details)
                } else {
                    console.error(error.response);
                }
            }   
        }
    }

    return (
        <div>
            <TodoList todos={todos} onSelect={handleSelected}/>
            <button onClick={()=>{selectDetailViewContent(DETAIL_VIEW_CONTENT.NEW)}}>새 할일</button>
            {
                todoformview ? <TodoForm onComplete={newTodo} />:''
            }
            {
                detailtodoview ? 
                <TodoDetail 
                    todo={detailtodoview} 
                    onModifyClick={handleModifyClick}
                    onDeleteClick={handleDeleteClick}
                />
                :''
            }
            {
                modifytodoview ? <TodoForm onComplete={modifyTodo} todo={modifytodoview}/>:''
            }
            
        </div>
    );
};

export default Todo;