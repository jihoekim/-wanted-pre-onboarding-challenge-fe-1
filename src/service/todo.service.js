// @ts-check
/// <reference path="../typedefs.js" />

import axios from "axios";

import { getToken } from "../auth/validate.login";

/**
 * Todo 리스트 요청
 * 
 * @returns {Promise<Todo>}
 */
export default async function getTodos() {

    const token = getToken();
    if (!token) throw(Error("no token"));

    const response = await axios.get(
        "http://localhost:8080/todos", 
        {headers:{Authorization:token}}
    );
    return(response.data.data);
}

/**
 * 새 Todo 작성 요청
 * 
 * @param {Todo} todo 
 * @returns {Promise<Todo>}
 */
export async function createTodo(todo) {
    const token = getToken();
    if (!token) throw(Error("no token"));

    const response = await axios.post(
        "http://localhost:8080/todos",
        {...todo},
        {headers:{Authorization:token}}
    );
    return(response.data.data);
}

/**
 * Todo 수정 요청
 * 
 * @param {Todo} todo 
 * @returns {Promise<Todo>}
 */
 export async function updateTodo(todo) {
    const token = getToken();
    if (!token) throw(Error("no token"));

    const response = await axios.put(
        "http://localhost:8080/todos/"+todo.id,
        {...todo},
        {headers:{Authorization:token}}
    );
    return(response.data.data);
}

/**
 * Todo 삭제 요청
 * @param {Todo} todo 
 * @returns {Promise<Todo>}
 */
 export async function deleteTodo(todo) {
    const token = getToken();
    if (!token) throw(Error("no token"));

    const response = await axios.delete(
        "http://localhost:8080/todos/"+todo.id,
        {headers:{Authorization:token}}
    );
    return(response.data.data);
}

/**
 * 특정 Todo 요청
 * 
 * @param {string} id
 * @returns {Promise<Todo>}
 */
 export async function getTodo(id) {
    const token = getToken();
    if (!token) throw(Error("no token"));

    const response = await axios.get(
        "http://localhost:8080/todos/"+id,
        {headers:{Authorization:token}}
    );
    return(response.data.data);
}
