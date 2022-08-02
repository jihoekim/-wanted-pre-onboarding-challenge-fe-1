// @ts-check
/// <reference path="../typedefs.js" />

import axios from "axios";

/**
 * 로그인 
 * 
 * @param {string} email 
 * @param {string} password 
 */
export default async function login(email, password) {    
        const response = await axios.post(
            "http://localhost:8080/users/login", 
            {email:email, password:password}
        );
        if (response.data?.token) {
            localStorage.setItem("token", response.data.token);
        }

}

/**
 * 회원 가입 
 * 
 * @param {string} email 
 * @param {string} password 
 */
export async function createUser(email,password) {

    const response = await axios.post(
        "http://localhost:8080/users/create", 
        {email:email, password:password}
    );
}
