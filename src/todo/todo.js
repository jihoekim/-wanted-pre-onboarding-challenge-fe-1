// @ts-check
/// <reference path="../typedefs.js" />

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
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
    const [detailTodoview, setDetailTodoView] = useState(null);
    const [modifyTodoview, setModifyTodoView] = useState(null);

    /**
     * @type {Todo|null} todo
     */
    let todo = null;

    async function getTodos() {
        try {
            const response = await axios.get(
                "http://localhost:8080/todos", 
                {headers:{Authorization:"a"}}
            );
            return(response.data.data);
        } catch (error) {
            if (error.response?.data?.details) {
                console.log(error.response.data.details)
            } else {
                console.error(error.response);
            }
        }
    }

    /**
     * 
     * @param {Todo} todo 
     * @returns {Promise<Todo>} data
     */
    async function createTodo(todo) {
        const response = await axios.post(
            "http://localhost:8080/todos",
            {...todo},
            {headers:{Authorization:"a"}}
        );
        return(response.data.data);
    }
    /**
     * 
     * @param {Todo} todo 
     * @returns {Promise<Todo>} data
     */
     async function updateTodo(todo) {
        const response = await axios.put(
            "http://localhost:8080/todos/"+todo.id,
            {...todo},
            {headers:{Authorization:"a"}}
        );
        return(response.data.data);
    }
    /**
     * 
     * @param {Todo} todo 
     * @returns {Promise<Todo>} data
     */
     async function deleteTodo(todo) {
        const response = await axios.delete(
            "http://localhost:8080/todos/"+todo.id,
            {headers:{Authorization:"a"}}
        );
        return(response.data.data);
    }

    /**
     * 
     * @param {string} id 
     */
    async function getTodo(id) {
        const response = await axios.get(
            "http://localhost:8080/todos/"+id,
            {headers:{Authorization:"a"}}
        );
        return(response.data.data);
    }
    

    useEffect(()=>{getTodos().then((data)=>setTodos(data));},[]);
    
    /**
     * 할일 작성 폼의 저장/취소 처리
     * 
     * @param {Todo|null=} todo 
     */
    async function newTodo(todo) {
        if (todo) {
            // 서버 요청
            try {
                const data = await createTodo(todo);
                // @ts-ignore
                setTodos(todos.concat([data]));
            } catch (error) {
                if (error.response?.data?.details) {
                    console.log(error.response.data.details)
                } else {
                    console.error(error.response);
                }
            }            
        }
        setTodoFormView(false);
    }

    /**
     * 할일 작성 폼의 저장/취소 처리
     * 
     * @param {Todo|null=} todo 
     */
    async function modifyTodo(todo) {
        if (todo) {
            try {
                const data = await updateTodo(todo);
                /**
                 * @type Array.<Todo>
                 */
                const t_todos = [...todos];
                // @ts-ignore
                setTodos(t_todos.map((t_todo)=>t_todo.id===todo.id?todo:t_todo));

            } catch (error) {
                if (error.response?.data?.details) {
                    console.log(error.response.data.details)
                } else {
                    console.error(error.response);
                }
            }            
        }
        setTodoFormView(false);
    }

    /**
     * 목록에서 할일을 선택하면 상세 내용 보여주기
     * 
     * @param {string} id 
     */
    async function handleSelected(id) {
        try {
            const todo = await getTodo(id);
            setDetailTodoView(todo);
            setModifyTodoView(null);
            setTodoFormView(false);
        } catch (error) {
            if (error.response?.data?.details) {
                console.log(error.response.data.details)
            } else {
                console.error(error.response);
            }
        }
    }

    function handleModifyClick(todo) {
        if (todo) {
            setDetailTodoView(null);
            setTodoFormView(false);
            setModifyTodoView(todo);
        }
    }

    async function handleDeleteClick(todo) {
        if (todo) {
            try {
                const data = await deleteTodo(todo);
                /**
                 * @type Array.<Todo>
                 */
                const t_todos = [...todos];
                // @ts-ignore
                setTodos(t_todos.filter((t_todo)=> t_todo.id!==todo.id));

                setDetailTodoView(null);
                setTodoFormView(false);
                setModifyTodoView(null);
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
            <button onClick={()=>{setTodoFormView(true);}}>새 할일</button>
            {
                todoformview ? <TodoForm onComplete={newTodo} />:''
            }
            {
                detailTodoview ? 
                <TodoDetail 
                    todo={detailTodoview} 
                    onModifyClick={handleModifyClick}
                    onDeleteClick={handleDeleteClick}
                />
                :''
            }
            {
                modifyTodoview ? <TodoForm onComplete={modifyTodo} todo={modifyTodoview}/>:''
            }
            
        </div>
    );
};

export default Todo;