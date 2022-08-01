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
    

    useEffect(()=>{getTodos().then((data)=>setTodos(data));},[]);
    
    /**
     * 할일 작성 폼의 저장/취소 처리
     * 
     * @param {Todo} todo 
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

    return (
        <div>
            <TodoList todos={todos}/>
            <button onClick={()=>{setTodoFormView(true);}}>새 할일</button>
            {
                todoformview ? <TodoForm onComplete={newTodo}/> : ''
            }
            <TodoDetail />
        </div>
    );
};

export default Todo;